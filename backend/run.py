import uvicorn

from core.config import load_google_credentials

if __name__ == "__main__":
    load_google_credentials()
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
