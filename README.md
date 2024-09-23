# Regex Generator API

This repository contains a FastAPI-based service that generates regular expression (regex) patterns based on a list of sample data using Google Vertex AI's language model.

## Requirements

- Python 3.8 or later
- A Google Cloud account with access to **Vertex AI**
- Google Application Credentials set up in your environment

## How to Run the Regex Generator API

Follow these steps to set up and run the Regex Generator API locally:


### Step 1: Install the Required Libraries

```bash
pip install -r requirements.txt
```

### Step 2: Set Up Google Cloud Credentials

1. Create a `.env` file in the root of the project directory.
2. Add the following line to the `.env` file, replacing the path with the actual location of your Google Cloud service account key:

   ```bash
   GOOGLE_APPLICATION_CREDENTIALS=path/to/your-google-service-account-key.json

### Step 4: Run the Application
    
```bash
python run.py
```

### Step 5: Test the API
```bash
curl -X POST "http://localhost:8000/generate-regex" -H "Content-Type: application/json" -d '{"sample_data": ["example1", "example2", "example3"]}'
```

## API Documentation

FastAPI automatically generates interactive API documentation for this service. Once the application is running, you can access the documentation at the following URLs:

- **Swagger UI**: [http://localhost:8000/docs](http://localhost:8000/docs)
- **ReDoc**: [http://localhost:8000/redoc](http://localhost:8000/redoc)

These pages allow you to explore and test the API endpoints directly in your browser, with descriptions and example requests provided for each endpoint.



