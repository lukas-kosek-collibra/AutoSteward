from fastapi import APIRouter, HTTPException
from backend.core.chain_setup import init_llm
from backend.models.regex_result import ColumnClassificationOutput, DataClass

router = APIRouter()
prompt, structured_llm= init_llm('resources/regexp_prompt.txt', ColumnClassificationOutput)
@router.post("/generate-regex", response_model=ColumnClassificationOutput)
async def generate_regex(request: DataClass):
    try:

        chain = prompt | structured_llm
        response = await chain.ainvoke({
            "samples": request.samples,
            "col_name": request.column_name,
            "description": request.description,
            "additional_context": request.additional_context,
            "min_sample_length": request.min_length or "N/A",
            "max_sample_length": request.max_length or "N/A"
        })
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))