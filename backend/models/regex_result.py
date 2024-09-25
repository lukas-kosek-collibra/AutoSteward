from typing import Optional, Annotated, List
from annotated_types import Len
from pydantic import BaseModel, constr

class DataClass(BaseModel):
    samples: list[str]
    column_name: str
    description: str
    additional_context: Optional[str] = None
    min_length: Optional[int] = None
    max_length: Optional[int] = None


class ColumnClassificationOutput(BaseModel):
    name: str
    examples: List[str]
    classificationRule: str
    description: str