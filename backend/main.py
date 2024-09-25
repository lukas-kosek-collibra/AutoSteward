from fastapi import FastAPI
from backend.routes import regex, policy_matcher

app = FastAPI()

app.include_router(regex.router)
app.include_router(policy_matcher.router)
