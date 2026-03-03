import os
from openai import OpenAI
from dotenv import load_dotenv

# 加载 .env 文件
load_dotenv()

# 从环境变量读取配置
api_key = os.getenv("OPENAI_API_KEY", "sk-placeholder")
base_url = os.getenv("OPENAI_BASE_URL", "http://localhost:11434/v1")
model_name = os.getenv("OPENAI_MODEL", "gpt-3.5-turbo")

print(f"Connecting to API at: {base_url}")
print(f"Using model: {model_name}")

client = OpenAI(
    api_key=api_key,
    base_url=base_url
)

try:
    response = client.chat.completions.create(
        model=model_name,
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Hello! Can you confirm you are working?"}
        ]
    )
    print("\nResponse from Custom API:")
    print("-" * 20)
    print(response.choices[0].message.content)
    print("-" * 20)
except Exception as e:
    print(f"\nError: {e}")
    print("Please check your OPENAI_BASE_URL and OPENAI_API_KEY in the .env file.")
