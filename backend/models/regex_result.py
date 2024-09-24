from typing import Optional, List
from pydantic import BaseModel, Field

class RegexResult(BaseModel):
    regex_pattern: str = Field(description="The generated regular expression pattern")
    description: Optional[str] = Field(description="A description of what the pattern matches")

class SampleDataRequest(BaseModel):
    sample_data: List[str] = Field(description="A list of sample data to generate a regex pattern for")

class ColumnClassificationInput(BaseModel):
    samples: List[str]
    column_name: str
    description: str
    additional_context: Optional[str] = None

class ColumnClassificationOutput(BaseModel):
    name: str
    examples: List[str]
    classificationRule: str
    description: str