import os
from typing import Optional, List
from pydantic import BaseModel, Field
from fastapi import FastAPI, HTTPException
from langchain_google_vertexai import ChatVertexAI
from langchain_core.prompts import PromptTemplate
from dotenv import load_dotenv
import uvicorn

load_dotenv()

GOOGLE_APPLICATION_CREDENTIALS = os.getenv("GOOGLE_APPLICATION_CREDENTIALS")
if not GOOGLE_APPLICATION_CREDENTIALS:
    raise EnvironmentError("Google Application Credentials are not set in environment variables.")
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = GOOGLE_APPLICATION_CREDENTIALS

app = FastAPI()

class RegexResult(BaseModel):
    regex_pattern: str = Field(description="The generated regular expression pattern")
    description: Optional[str] = Field(description="A description of what the pattern matches")

try:
    with open('prompt.txt', 'r') as file:
        prompt_text = file.read()
except FileNotFoundError:
    raise HTTPException(status_code=500, detail="Prompt file not found.")

prompt = PromptTemplate.from_template(prompt_text)

model = ChatVertexAI(model_name="gemini-1.5-pro-001")

structured_llm = model.with_structured_output(RegexResult)

class SampleDataRequest(BaseModel):
    sample_data: List[str] = Field(description="A list of sample data to generate a regex pattern for")


@app.post("/generate-regex", response_model=RegexResult)
async def generate_regex(request: SampleDataRequest):
    try:
        chain = prompt | structured_llm
        response = chain.invoke({"sample_data": request.sample_data})
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
