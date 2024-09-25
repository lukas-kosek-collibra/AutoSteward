from typing import Optional, Annotated, List
from annotated_types import Len
from pydantic import BaseModel, constr

class ColumnClassificationInput(BaseModel):
    samples: Annotated[list[str], Len(min_length=1, max_length=100)]
    column_name: constr(min_length=1, max_length=255)
    description: constr(min_length=5, max_length=255)
    additional_context: Optional[constr(max_length=500)] = None
    min_length: Optional[int] = None
    max_length: Optional[int] = None
class ColumnClassificationOutput(BaseModel):
    name: str
    examples: List[str]
    classificationRule: str
    description: str