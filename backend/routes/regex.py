from fastapi import APIRouter, HTTPException
from backend.core.chain_setup import structured_llm, prompt
from backend.models.regex_result import RegexResult, SampleDataRequest

router = APIRouter()

@router.post("/generate-regex", response_model=RegexResult)
async def generate_regex(request: SampleDataRequest):
    try:
        chain = prompt | structured_llm
        response = chain.invoke({"sample_data": request.sample_data})
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
