
from langchain_google_vertexai import ChatVertexAI
from langchain_core.prompts import PromptTemplate
from backend.utils.file_operations import load_prompt
from backend.models.regex_result import ColumnClassificationOutput
model = ChatVertexAI(model_name="gemini-1.5-pro-001")
prompt_text = load_prompt('resources/prompt.txt')

prompt = PromptTemplate.from_template(prompt_text)
structured_llm = model.with_structured_output(ColumnClassificationOutput)


