---
layout: single
header:
  og_image: /assets/blogposts/podcastimages/eddie.jpg
  teaser: /assets/blogposts/podcastimages/eddie.jpg
  overlay_color: "#333"
sidebar:
  - title: "Eddie Villalba"
    image: /assets/blogposts/podcastimages/eddie.jpg
    image_alt: "image"
    text: "Principal Commercial Software Engineer @ Microsoft"
tagline: "Cloud Solution Architect podcast"
title: "#13 – Eddie Villalba - Principal Commercial Software Engineer (Kubernetes/Cloud Native)"
date: 2020-02-20 15:40:00 +1100
file: https://csapodcast.azureedge.net/episodes/ep13EddieVillalba.m4a
media: 
 m4a: https://csapodcast.azureedge.net/episodes/ep13EddieVillalba.m4a
summary: "#13 – Eddie Villalba - Principal Commercial Software Engineer - Kubernetes for the Windows folks"
description: "In this episode we talk to Eddie who works as a Principal Commercial Software Engineer @ Microsoft. He has also co-authored the book [Kubernetes Best practices](https://www.amazon.com/Kubernetes-Best-Practices-Blueprints-Applications/dp/1492056472) along with Brendan Burns and is a contributor for CNCF/K8s. This episode is **jam-packed** with super good K8s content and we talk about the following * Eddie's journey * Learning path for K8s to someone coming from the Windows world(really good analogies to make it sticky) * He breaks down the K8s certification - and what it takes to get certified and who should take which exam * Future of K8s * How to be part of the K8s community * Interesting Talent Management system project using Kubernetes * When **NOT** to use K8s"
duration: "48:56" 
length: "47185920"
explicit: "no" 
keywords: "technology, azure, azuremonk, podcast, kubernetes, windows, k8s, cncf, monk"
block: "no" 
voices: "Eddie Villalba and Anand Kumar R"
permalink: /Eddie
podcast_file_size: 45.0 MB 
podcast_duration: "48:56" 
podcast_length: 47185920
chapters:
 - '00:01:52.0 Journey'
 - '00:05:42.0 Learning Path -K8S' 
 - '00:12:55.0 K8s Certification guidance' 
 - '00:19:02.0 Future of K8s' 
 - '00:24:30.0 K8s Community' 
 - '00:31:04.0 Projects ' 
 - '00:35:03.0 When NOT to use K8s' 

categories:
  - podcast
author_profile: false

---

{% include podcast-player.html %}

In this episode we talk to Eddie who works as a Principal Commercial Software Engineer @ Microsoft. He has also co-authored the book [Kubernetes Best practices](https://www.amazon.com/Kubernetes-Best-Practices-Blueprints-Applications/dp/1492056472) along with Brendan Burns and is a contributor for CNCF/K8s. This episode is **jam-packed** with super good K8s content and we talk about the following: 

* Eddie's journey
* Learning path for K8s to someone coming from the Windows world(really good analogies to make it sticky)
* He breaks down the K8s certification - and what it takes to get certified and who should take which exam 
* Future of K8s
* How to be part of the K8s community
* Interesting Talent Management system project using Kubernetes
* When **NOT** to use K8s 


**Eddie's journey on how he got to where he is today (01:02)**

* Eddie has been with Microsoft for over 10 years with an open source background all through. When Microsoft moved to the Cloud, he started seeing a lot of the workloads were driven by Open Source projects and he decided to make a career switch by joining as a Global Black belt in the Open Source team. 
* He then moved to the Cloud Native application development black belt team. 
* In his current role as a Commercial Software engineer he does a code-with customers using the open source methodologies. Majority of the code is out there in the open unless proprietary code is requested by the customer. They create reusable code that is resuable across different stacks and different industries. 

**Learning path for Kubernetes to someone coming from the Windows world**
	

* Based on Eddie's experience teaching and conducting workshops across the world one of the biggest roadblocks he has seen is learning the bash shell and the basic Linux commands. (you don’t have to go super deep). 
* Depending on your background you might want to specialize and prepare the learning plan. 
	* If you are a security person - then an understanding of cgroup, namespaces etc are essential. 
	* If you are an app developer running your apps in a container - you don’t have to deep experience in those. 
	* If an operator you need to go deep dive on topics such as - "run as user" etc. 
	* Where things overlap is networking - networking is same in windows and Linux. (for the most part)
	* Once you get the fundamental concepts, move to Kubernetes and he gives a very good analogy of seeing your containers as process in Windows
   * Looks at containers as a process. He compares calc.exe in the windows world as similar to running a container based off an image. Multiple copies of the calc.exe process is similar to running multiple container instances. When we make a functional change example change calc.exe - it is similar to updating image for the container - and rerun the new version of the new calc.exe. 
	 * Container is just a PID at the end of the day. Only difference is that we can look at the PID tree. 

**Best practices for taking the Kubernetes certification exam**

There are two certification paths for anyone interested in the Kubernetes certification 
* [Certified Kubernetes Administrator(CKA)](https://www.cncf.io/certification/cka/) - This one needs very heavy understanding of how the underlying components of Kubernetes work. If you are not an operator and building Kubernetes cluster, this may not be the exam you want to take. In a cloud hosted scenario, most of the the control plane components might be abstracted for you. 
  * [Kelsey Hightower's Kubernetes the Hard way](https://github.com/kelseyhightower/Kubernetes-the-hard-way) is a great starting point. He also recommends Kubernetes up and running. This builds on top of the infrastructure that you built with KTHW. 
 *{: .notice--success} Exam tip : Its all about time management. It’s a 3 hour and you will be using every second of the three hours. Know "kubectl" very well. 
* [Certified Kubernetes Application Developer(CKAD)](https://www.cncf.io/certification/ckad/) - If the etcd and other control plane components are abstracted for you, and you are someone who is using Kubernetes for application development and deployment then this exam might be the one for you.  

**Future of Kubernetes**

* Eventually its going to be like the hypervisor. Eventually the goal of Kubernetes is to be "boring" - it's a master API to get workloads running. The idea of understanding how the backend components work - should be irrelevant. Customization of the API would be the future where end users extend what it was originally created for. 
* Now that Kubernetes is in the enterprise - understanding the needs and effectively make it useful for large Enterprise customers is in pipeline
  

**Be a part of the Kubernetes community**

* Be a part of the community and get involved - you don't necessarily have to be a developer - there are plenty of ways you can help out. 
* How ? 
  * Find a Special Interest Group(SIG) under [Kubernetes.io website](https://kubernetes.io/community/).

**Interesting projects that Eddie has worked on**

* Talent Management system project in a million employee company - Eddie talks about a Data science project which builds real time models using Azure machine learning toolsets. They would then train all of the models them and serve up the model using web services using AKS using a BOT service. Which led to promotion based on data points. And provided a ROI on the talent for the investment that they had made on the talent. 

**When NOT to use Kubernetes** 

* Even though a lot of progress has been made on the "operators" front - Kubernetes was not made initially for stateful data. Stateful applications as of today still require a lot of work this is constantly being improved on as we speak. But it might be easier to just consume a PaaS service already provided by many of the cloud providers for stateful services

**Eddie's advice to keep abreast of all the changes happening in the Open Source world**

- Keeps his ear to the ground and keeps track of all the [graduated and incubating project list from the CNCF](https://www.cncf.io/projects/) and understanding all of them work together is  something he closely tracks. 
- KubeWeekly newsletter - curated email listing which is sent every week from all over the internet centered around Kubernetes. 
- CNCF meetup groups - he actively participates and is a coach of the Austin CNCF meetups 
- Attend Kube-Con in person or virtually using YouTube.

**How to get in touch with Eddie**

- Evill_Genius - Slack ( he is on the Kubernetes slack channel)

- Twitter - [@evill_Genius](https://twitter.com/evill_genius)

- [YouTube channel](https://www.youtube.com/channel/UCBbaw4ow3DN31pu4h6MFgaw) 

- Book - [Kubernetes Best practices Blueprint](https://www.amazon.com/Kubernetes-Best-Practices-Blueprints-Applications/dp/1492056472) 

  






