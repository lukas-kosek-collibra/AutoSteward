import unittest
import aiohttp
import asyncio
from collections import Counter

BASE_URL = "http://127.0.0.1:8000/generate-regex"

class TestGenerateRegexAPI(unittest.TestCase):

    def setUp(self):
        self.headers = {
            "Content-Type": "application/json"
        }
        self.test_cases = [
            {
                "description": "Email Test",
                "payload": {
                    "samples": ["john.doe@example.com", "jane.doe@example.com"],
                    "column_name": "Email",
                    "description": "Detect email patterns in the column",
                    "additional_context": "Looking for valid email addresses"
                }
            },
            {
                "description": "Date Test",
                "payload": {
                    "samples": ["2024-09-25", "1999-01-01", "2020-12-31"],
                    "column_name": "DateOfBirth",
                    "description": "Detect date patterns in YYYY-MM-DD format",
                    "additional_context": "Parsing birth dates"
                }
            },
            {
                "description": "Currency Test",
                "payload": {
                    "samples": ["$100.50", "£200", "€50.75"],
                    "column_name": "Amount",
                    "description": "Detect currency patterns in different formats",
                    "additional_context": "Currency values in different formats"
                }
            }
        ]
        self.num_calls = 10

    async def async_post(self, session, payload):
        """
        Helper function to send async POST requests.
        """
        async with session.post(BASE_URL, json=payload, headers=self.headers) as response:
            return await response.json(), response.status

    def test_generate_regex(self):
        """
        Wrapper to run the async test using asyncio.
        """
        asyncio.run(self.run_async_generate_regex())

    async def run_async_generate_regex(self):
        """
        The actual async test that sends multiple requests and checks variation in responses.
        """
        async with aiohttp.ClientSession() as session:
            for test_case in self.test_cases:
                with self.subTest(description=test_case["description"]):
                    tasks = [self.async_post(session, test_case["payload"]) for _ in range(self.num_calls)]
                    # Gather results for all requests
                    responses = await asyncio.gather(*tasks)

                    classification_rules = [data.get("classificationRule") for data, status in responses if status == 200]

                    unique_classification_rules = Counter(classification_rules)

                    num_unique_results = len(unique_classification_rules)
                    self.assertLessEqual(
                        num_unique_results,
                        5,
                        f"Expected no more than 2 unique classification rules, but got {num_unique_results} for {test_case['description']}: {unique_classification_rules}"
                    )

if __name__ == '__main__':
    unittest.main()
