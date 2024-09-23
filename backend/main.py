from fastapi import FastAPI
from backend.routes import regex

app = FastAPI()

app.include_router(regex.router)
