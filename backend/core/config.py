import os
from dotenv import load_dotenv

def load_google_credentials():
    load_dotenv()
    google_credentials = os.getenv("GOOGLE_APPLICATION_CREDENTIALS")
    if not google_credentials:
        raise EnvironmentError("Google Application Credentials are not set in environment variables.")
    return google_credentials