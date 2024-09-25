
from langchain_google_vertexai import ChatVertexAI
from langchain_core.prompts import PromptTemplate
from pydantic import BaseModel

from backend.utils.file_operations import load_prompt


def init_llm(path: str, structured_output: BaseModel):
    model = ChatVertexAI(model_name="gemini-1.5-pro-001",temperature=0.0)
    prompt_text = load_prompt(path)
    prompt = PromptTemplate.from_template(prompt_text)
    structured_llm = model.with_structured_output(structured_output)

    return prompt, structured_llm



