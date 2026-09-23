---
title: "Going Screenless Using AI: An Experiment in Minimizing Screen Time"
description: "An experiment in replacing everyday phone workflows with an AI-powered, voice-first setup to reduce screen time."
categories:
  - blog
tags:
  - ai
  - productivity
  - personal-projects
  - screen-time
layout: single
excerpt: "A tinkering project to reduce screen time by moving everyday personal tech workflows to a voice-first AI assistant and Kindle."
permalink: "blog/going-screenless-using-ai/"
header:
  overlay_color: "#333"
---

Every now and then, I think we all need to do a project purely for the sake of it. No outcome, no ROI—just because you can. This is one of those projects.

I've been trying to cut down my screen time for a while now. I've failed more than once. If you're already thinking, "Isn't this completely pointless and a complete waste of time?" - yeah, probably. But I'm doing this purely because it's fun and its the sort of thing that quenches the tinkerer thirst in me :).

If DIY just for the sake of it isn't your thing, I respect that—feel free to bail now and reclaim those five minutes.

### Why?

If you are wondering why am I even trying to replace my phone in the first place? I love brain science and in short - there's actual science behind why going screenless matters. When you eliminate screens and let your brain experience boredom, you activate the Default Mode Network. That idle state is critical for forming deep neural connections and creative problem-solving.

I created a page with the key findings if you are interested in that kind of stuff [Brain & Consumption Impact](https://ranand12.github.io/brain-consumption-impact/).

### What Didn't Work

I've tried all the usual tricks. Locking the phone in a physical box.

Turning my phone screen to grayscale + assistive access.

Using NFC Tags to screenlock ([Foqos](https://www.foqos.app)). Moving the TV out of the living room and down to the basement so watching anything requires a deliberate trek downstairs. Each one of them helped to some extent but the pull of the screen is just too strong (atleast for me) when almost your daily workflows run through it. So the plan became: swap my daily workflows for a pure audio interface. And honestly, what better way to do it than with AI :)

When I sat down and really thought about it, my phone usage came down to three things (the 80%): YouTube, WhatsApp, and reading articles on Safari . I never actually liked reading on a screen. I much prefer reading on my Kindle. So the question became: what if I could handle my personal tech usage with minimal screentime?

### The Setup

Ok so what did I do? I set up a Raspberry Pi connected to a microphone running Gemini Live for real-time, conversational voice input which has access to a agent (the brain is the hermes in this case powered by Gemini 3.7 flash) ([Hermes agent](https://github.com/NousResearch/hermes-agent)).

> I would not not recommend trying this if you are unsure of how things work under the hood. This is good for personal experimentation only. Running an agent like Hermes requires proper security considerations. I'm doing this in a sandbox environment with all the security controls in place. Please do your due diligence before you try something similar on your own.

Here's what the workflow looks like in practice. I can speak naturally and say something like: "Summarize the latest research on agent harness, send it as a document to my Kindle, and oh by the way, what are the latest messages on WhatsApp?" The agent handles splitting the tasks, parallelizing the work, and giving me exactly the output I need. If its an asynchronous, I just walk away and everything shows up where it needs to.

Instead of reading long research articles off a glaring phone screen, I get them delivered cleanly to my Kindle. Marshall McLuhan was right—the medium is the message.

### Why Hermes Agent

So why Hermes specifically?

I really liked the idea of a [built-in learning loop](https://hermes-agent.nousresearch.com/docs/). So it self improves (so after a month the agent responses gets measurably different), has context and has tons of skills and a good set of gateways to connect to it! Great for a personal assistant which is not static

### Disclaimer

Now, if you are thinking "can you not do this with Google Home or Siri or Google Assistant already?" I would completely agree with you and acknowledge this - but also see above on reducing phone usage part. FWIW I did try Google Home but found it limiting because of the way it restricts custom variables to be sent.

If you think this is totally absurd, I completely understand. But hey, atleast you stuck with me to the end of the article and I appreciate that :)

---

Originally published on [LinkedIn](https://www.linkedin.com/pulse/going-screenless-using-ai-experiment-minimizing-screen-anand-kumar-v30ec/).
