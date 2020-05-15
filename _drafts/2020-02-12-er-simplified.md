---
title: "TMUX Simplified in WSL for Visual Studio Code"
last_modified_at: 2020-02-12T16:28:02-05:00
categories:
  - opensource
tags:
  - kubernetes
  - tmux
  - visualstudiocode
toc: true
toc_sticky: true
toc_label: "How goals failed me"
toc_icon: book-open
layout: single
excerpt: "TMUX simplified for Windows guys"
header:
  overlay_color: "#333"
---

People have often told me ExpressRoute is one of the few services for which they get the least hands-on experience and therefore it gets somewhat harder to grasp the concepts. I have been fortunate to work hands-on and be a part of very large ExpressRoute deployments. So here is my attempt at explaining the concepts for someone getting started. 



So let's say you designed a highly available geo-redundant application across multiple Azure regions using geo-redundant storage, multiple VNets each in one region, traffic manager, and perhaps even cosmos DB. But did you miss out on one important component ? The disaster recovery solution from your on premise network to Azure, at least some of the customers tend to overlook this. 

but but but.. isn't ExpressRoute already have built in highly availability and disaster recovery ? 



Well, yes and no. So ExpressRoute has built-in high availability (if you implement it the right way - I will make another post on this soon). But let's assume the worst-case-scenario happens where the 

- on premise data center from where you originate the ExpressRoute goes down
- The peering location (the location where your Partner edge routers meet the Microsoft routers ) goes down

Ok now we are in trouble. If we are going to be planning for disaster recovery for every compute component shouldn't we also plan for the network component ?



Aah i get it - lets have two ExpressRoute circuits that will be solve the problem 



Well not reallyy. Having two ExpressRoute circuits will ofcourse be the starting point but again you need to ensure that they are setup right and thats what I aim to do in this post. 



