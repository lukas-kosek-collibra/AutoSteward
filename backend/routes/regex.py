from fastapi import APIRouter, HTTPException
from backend.core.chain_setup import structured_llm, prompt
from backend.models.regex_result import ColumnClassificationOutput, ColumnClassificationInput

router = APIRouter()

@router.post("/generate-regex", response_model=ColumnClassificationOutput)
async def generate_regex(request: ColumnClassificationInput):
    try:
        chain = prompt | structured_llm
        response = await chain.ainvoke({
            "samples": request.samples,
            "col_name": request.column_name,
            "description": request.description,
            "additional_conxet": request.additional_context,
            "min_length": request.min_length or "",
            "max_length": request.max_length or ""
        })
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))