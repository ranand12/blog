---
title: "azure locks with tags"
last_modified_at: 2020-02-12T16:28:02-05:00
categories:
  - azure
tags:
  - powershell
  - tags
  - locks

layout: single
excerpt: "azure locks using azure tags"
header:
  og_image: /assets/blogposts/2020-02-14-azure-locks-with-tags/bannertag.png
  overlay_color: "#333"
  

---

So you've all heard about K8s by now and there are a ton of cool things that K8s can do for you. Scheduler is one such component which makes K8s really awesome. So lets break down what a Kube-scheduler with an analogy and also go through a step by step process to implement the different scheduling options ( we wont cover custom schedulers in this post - but thats not too complicated either if you wish to do so)



So what is a kube-scheduler ? 

Lets look at three K8s components - 



1. The pod ( where your actual workload which contains one or more containers )
2. The node (the compute worker node - typically an VM or a physical machine )
3. The scheduler (which is incharge of )