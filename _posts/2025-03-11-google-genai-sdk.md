---
title: "Google's Unified GenAI SDK: A Hands-on Guide"
categories:
  - blog
layout: single
excerpt: "Google's Unified GenAI SDK: A Hands-on Guide"
description: "Google's Unified GenAI SDK: A Hands-on Guide"
categories:
  - blog
tags:
  - google
  - genai
  - gemini
  - sdk
  - python
  - unified
excerpt: "Google's Unified GenAI SDK: A Hands-on Guide"
permalink: "blog/genaisdk"
classes: wide
header:
  overlay_color: "#333"
  og_image: /assets/blogposts/genai/genai.png
  teaser: /assets/blogposts/genai/genai.png
---


# Google's Unified GenAI SDK: A Hands-on Guide

## Introduction

> If you prefer learning visually here is a YouTube Video I created for the same article {% include video id="8vLo1G6jqDA" provider="youtube" %} 


If you've been working with Google's Generative AI model Gemini, you might have encountered a frustrating challenge: using different client libraries for the Gemini Developer API and the enterprise version on Vertex AI. While these libraries were similar, they weren't interchangeable, meaning that moving from experimentation to production required code rewrites.

Google's new unified GenAI SDK solves this problem by providing a single library that works seamlessly with both Gemini 2 and 1.5, across both developer and enterprise environments. 

![Alt text for the image](assets/blogposts/genai/genaisplit.png)

In this guide, we'll explore three key methods for leveraging this SDK:

1. Generate content
2. Generate streaming content
3. Chat client

![Alt text for the image](assets/blogposts/genai/pythonclient.png)

Let's dive in and see how this unified SDK simplifies working with Google's generative AI capabilities.

## Getting Started

First, let's install the SDK using pip:

```python
# Install the Google GenAI SDK
pip install google-generativeai
```

### Setting Up Authentication

#### For Developer API

If you're using Google Colab, you can find your API key under the secrets section by clicking on "Import key from AI Studio." If you're not using Colab, you can generate a free API key at [aistudio.google.com](https://aistudio.google.com).

```python
from google import genai
from google.colab import userdata
from IPython.display import Markdown, display

GOOGLE_API_KEY = userdata.get('GOOGLE_API_KEY')


# Create a client instance using Google Gemini API Key
client = genai.Client(api_key=GOOGLE_API_KEY)


response = client.models.generate_content(
    model='gemini-2.0-flash', contents='Create a short bedtime story for a 7 year old using unicorn and rainbows'
)
display(Markdown(response.text))

```

#### For Vertex AI (Enterprise)

For the enterprise version on Vertex AI, you would use the same code after authenticating to Google Cloud and provide your GCP project ID:

```python

#Authenticate to Google Cloud 
gcloud auth application-default login

```

``` python 

# Provide project details
from google import genai
from IPython.display import Markdown, display
from google.colab import userdata

PROJECT_ID = userdata.get('PROJECT_ID')
LOCATION = userdata.get('LOCATION')

# Create a client instance using Vertex AI in Google Cloud
client = genai.Client(vertexai=True, project=PROJECT_ID, location=LOCATION)


response = client.models.generate_content(
    model='gemini-2.0-flash', contents='Create a short bedtime story for a 3 year old using unicorns and rainbows'
)
display(Markdown(response.text))

```


With the unified SDK, the code is identical whether you're using the developer API or Vertex AI. The only difference is in the initial setup.

## Generate Streaming Content

If you prefer a streaming response that delivers content chunk by chunk:

```python

response = client.models.generate_content_stream(
    model="gemini-2.0-flash",
    contents=["Create a poem with unicorns and rainbows"])


for chunk in response:
    print((chunk.text), end="")
```

The streaming approach can provide a more interactive user experience, especially for longer responses.

## Chat Client

The chat client method maintains conversation history and context, making it ideal for interactive applications:

### Turn 1
```python
chat = client.chats.create(model="gemini-2.0-flash")
response = chat.send_message("I want to play a tic tac toe game. I selected top right as X. Your turn")

print(response.text)
```

### Turn 2
``` python

response = chat.send_message("ok, I go bottom right as X")
print(response.text)

```
You would see that the response from the LLM maintains the context from the previous conversations


## Customizing Configuration Parameters

By default, the SDK uses a set of standard configurations. However, you can modify these to suit your needs:

```python
from google import genai
from google.genai import types

PROJECT_ID = userdata.get('PROJECT_ID')
LOCATION = userdata.get('LOCATION')

# Create a client instance using Vertex AI in Google Cloud
client = genai.Client(vertexai=True, project=PROJECT_ID, location=LOCATION)


response = client.models.generate_content(
    model='gemini-2.0-flash',
    contents='Create a short bedtime story for a 3 year old using unicorns and rainbows',
    config = types.GenerateContentConfig(
        max_output_tokens=200,
        temperature = 0.1)
)
display(Markdown(response.text))

```

## Using System Instructions

System instructions help define the persona of your client instance:

```python
# Set system instructions to define a persona
sys_instruct = "You speak like a short tempered pirate"
response = client.models.generate_content(
    model='gemini-2.0-flash',
    contents='Create a short bedtime story for a 3 year old using unicorns and rainbows',
    config = types.GenerateContentConfig(
        systemInstruction=sys_instruct
        )
    )

display(Markdown(response.text))
```

This can be useful for creating specialized agents with specific personalities or expertise.

## Conclusion

Google's unified GenAI SDK significantly simplifies the process of working with Gemini models across both development and production environments. With a consistent API for generating content, streaming responses, and maintaining chat sessions, developers can now experiment freely and move to production without the pain of code rewrites.

The SDK also provides extensive customization options through configuration parameters and system instructions, allowing for fine-tuned control over model behavior.

In upcoming articles, we'll explore more advanced features of the SDK, including vision, audio, and multimodal capabilities. Stay tuned!

## Resources

- [Google AI Studio](https://aistudio.google.com)
- [Google GenAI Python SDK Documentation](https://googleapis.github.io/python-genai/)
- [Vertex AI Documentation](https://cloud.google.com/vertex-ai/generative-ai/docs/sdks/overview)
