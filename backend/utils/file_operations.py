def load_prompt(file_path: str) -> str:
    try:
        with open(file_path, 'r') as file:
            return file.read()
    except FileNotFoundError:
        raise FileNotFoundError(f"Prompt file '{file_path}' not found.")
