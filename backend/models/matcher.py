from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import date

from backend.models.regex_result import DataClass


class Policy(BaseModel):
    description: str = Field(..., description="A description of the AI policy.")
    purpose: Optional[str] = Field(None, description="The purpose of the AI policy.")
    scope: Optional[str] = Field(None, description="The scope of the AI policy.")
    effective_start_date: Optional[date] = Field(None, description="The effective start date of the policy.")
    exception_scenario: Optional[str] = Field(None, description="Details on exemption scenarios.")
    measurement: Optional[str] = Field(None, description="How the policy's implementation will be measured.")
    descriptive_example: Optional[str] = Field(None, description="Example scenarios or use cases related to the AI policy.")

class DataPolicyMatcherInput(BaseModel):
    policy: Policy
    data_classes: List[DataClass]
    # class Config:
    #     arbitrary_types_allowed = True

class DataPolicyMatcherOutput(BaseModel):
    data_classes: Optional[List[DataClass]]
    reason: Optional[str]