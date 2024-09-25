from fastapi import APIRouter, HTTPException
from backend.core.chain_setup import init_llm
from backend.models.matcher import DataPolicyMatcherInput, DataPolicyMatcherOutput

router = APIRouter()
prompt, structured_llm = init_llm('resources/matching_prompt.txt', DataPolicyMatcherOutput)
@router.post("/match-policy", response_model=DataPolicyMatcherOutput)
async def match_policy(request: DataPolicyMatcherInput):


    try:
        chain = prompt | structured_llm
        response = await chain.ainvoke({
            "data_policy": request.policy.model_dump(),
            "data_classes": [data_class.model_dump() for data_class in request.data_classes]
        })
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))