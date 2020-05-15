---
title: "Blogging, Investing and Health - 5 things they ALL have in common"
last_modified_at: 2020-04-24T07:26:02-05:00
categories:
  - blog
tags:
  - investment
  - blog
  - non-tech
  - health
permalink: "blog/bloginvesthealth"
layout: single
excerpt: "Blogging, Investing and Health - 5 things they ALL have in common"
header:
  overlay_color: "#333"
  og_image: /assets/blogposts/bloginvest/5things.jpg
  teaser: /assets/blogposts/bloginvest/5things.jpg
  


---



Hello and welcome to Azure monk.com

In this video we will talk about "Routing in Azure" - explained in plain english with a story we will be covering the following topics each in less than 5 minutes  : 

- How Azure Routes traffic by default ( system routes )
- How Routing priorities work and how Azure selects a route 
- What a User Defined Route is and how it is created and applied

Modern Zoo was a fictional company which had an :

- Azure Virtual Network called "Domestic Animals -Virtual Network" with an address space of 10.0.0.0/16
  - Within which they had two subnets "Cats subnet" and a dogs subnet. 
  - They had VM resources spun up in both subnets.
  - This Virtual Network was also connected to an on premise network with an address space of 192.168.0.0/16 using Site to Site VPN

The modern zoo had a new CTO - Curious George, George was curious about everything that happened around him. He was amazed at how the VMs from the Cat subnet are able to talk to the VMs from the Dog subnet ?? The first response that was given was -  "hey ! these two VMs were able to talk to each other because, well , errrr... they are in the same Virtual Network ! But Curious George was not one who was satisified with superficial answers, he wanted to know how they talk and he reallly wanted to know. So for the sake of curious George lets go a level deeper and understand how these VMs are able to talk to each other. 

 

All this happens because of routing, but before we jump into this specific route , lets understand with a  analogy and example of what a route table is and how it works. Lets say you were living in NYC and you wanted to get to California - so in this case the "Destination" is California. So in order to get to your destination the first hop/or next hop would be to the NYC JFK Airport right ? ***Suppose you wanted to go to NJ as a destination from your NYC home your next hop in this case would be the Train station because that is the way you prefer***. We will use this analogy of a destination and a next hop through out this video for our Azure example. ***From this analogy you would see that nowhere do we specify the source address, that is because we are associating this to a subnet and it automatically appleis to every resource isnide the subnet*** 

 

Going back to George's question - by default even without us doing anything - Azure automatically creates certain routes and associates that to every resource that is inside of a Virtual Network. <insert image> "but but where can I see it?" 



We can see this by clicking on a VM and then choosing the NIC card associated to it and then clicking on effective routes. These set of routes which are automatically created for us are called system created routes because you didn't have to create them manually. 



In this example we see that the address range of the Virtual Network that we created has a route here and it has a next hop as "Virtual Network" - well what does **THAT** mean ? The keyword "virtual network" means that Azure takes it own auto-magic routes to route between the resources inside of the Virtual Network. And the "source" here does not mean the source address - the source means "how/who created these routes ?" In this case it is default - sooo you guessed it Azure created it on your behalf. 

 ***"What If they are in two different subnets" Even if they are in 2 different subnets this route would still be valid and azure takes it auto-magic route to communicate.***

The next question Curious George had was "How is the VM communicating to on premise ?" In this case if we go back and look at the effective routes we would see the following entries - where the destination is the address range of the on premise network and the next hop is Virtual Network Gateway. In this case we see the source as also Virtual network Gateway because the Virtual network Gateway is what created this route for us. Remember this is also automatically created when we create the connection, we don't have to create this manually.

 

Great - George's curiosity was quenched.

 

"a few weeks later" 

 a few weeks passby 

Modern zoo acquired a new Virtual Network called Wild-Animals Virtual Network with an address range of 10.1.0.0/16

- Which consisted of a Lion Subnet 
- and a hyena subnet. 

 

This network was connected to the domestic animals virtual network using Virtual Network peering. Once again curious george wondered how a lion subnet can talk to a dog subnet ? If we go back and look at the effective routes after the Virtual Network peering was setup, we now see that there is a route with source as default - because azure created this and destination as the Wild animals Virtual network ie 10.1.0.0/16 and the next hop as Virtual Network peering. Which is what we would expect - similarly you would also see a similar route on the Wild animals side as well  - which would have a destination as Domestic Animals Virtual Network address range and next hop as Virtual Network peering. 

 

"A few weeks later"

 

A few weeks passed by and we now had a new ZooKeeper Virtual Appliance inside the ZooKeeper subnet. ZooKeeper hated this chaotic traffic mingling. He did NOT like the fact that wild animals could talk to domestic animals without passing through the ZooKeeper and even the fact that subnets within a Virtual network could talk to each other like for egs he did not want a dog subnet to talk to a cat subnet directly without passing through the ZooKeeper.  But he was also reasonable in some aspects - so he defined 4 rules for the Modern Zoo organization : 



1. Rule no 1 -  Domestic animals Virtual Network should not talk to Wild Animals Virtual Network without passing through ZooKeeper
2. Rule no 2 - No two VMs can talk to each other inside the domestic animals Virtual Network. 
3. Exception to Rule no 2  - The VMs inside the dogs subnet could talk to each other without passing through ZooKeeper
4. Rule no 4 - Any traffic from dog subnet to hyena subnet should be dropped. 

 

How do we accomplish this ? So far we talked about system routes or routes that were created automatically, in order to accomplish these rules lets look at User Defined Routes - 



Before we look at user defined routes lets look at how route priorities work inside of Azure, lets say you have 3 different routes : 



- Destination 10.0.0.0/16 ; next hop  - Virtual Network 
- Destination - 10.0.1.0/24 ; next hop - Virtual Appliance 
- Destination - 10.0.1.5/32 ; next hop - None 

When you look at these these three routes, the route which is most specific or the longest prefix wins and takes highest precedence. In other words if you convert the address to binary the number the address with the longest subnet mask wins- in this case that is the /32 because that is the most specific. Next precedence is given to the /24 route and the last preference is given to the /16 route. 

Great - but what if all three routes were exactly the same but they came from different sources. For example : 

- Source : Default ; Destination : 10.0.1.5 ; next hop : Virtual Network 
- Source : Virtual Network Gateway ; Destination : 10.0.1.5 ; Next Hop : Virtual network gateway ( note that BGP routes also fall under this category. BGP is the protocol with which routes are exchanged )
- Source : User ; Destination : 10.0.1.5 Next Hop : Virtual Appliance 

In this case all three routes are exactly the same prefix - so how does Azure pick a route. Azure picks the route in the following order. The highest precedence goes to User Defined Routes, the next preference is for BGP routes, The least preference is given to system routes. 



Great now that we understand this lets go back to how the ZooKeeper can accomplish his requirements using User Defined Routes. The way the user defined routes are created is 

- First a route table is created
- Routes added 
- And then associated to a subnet

Remember User Defined Routes can only be associated to a subnet and not a NIC card or a virtual network 

 

User defined routes have five options for the next hop type, lets look at each of them : 

 

1. None - which means blackhole the traffic -  that is if you set the next hop as "none" the traffic that is destined to the destination will be dropped/blackholed. In our case we will use this for rule number 4 which is dropping traffic from dog subnet destined to hyena subnet 
2. Virtual appliance - What this means is, when we set the next hop as Virtual Appliance and an IP, the traffic gets through a Network Virtual Appliance like the ZooKeeper before reaching its destination. In order to accomplish Rule Number 1 and Rule Number 2 we will use this as the next hop. ie address range of the wild animals virtual network next hop as IP address of Virtual Appliance, similarly IP address range of the domestic animals virtual network with next hop as IP address virtual appliance. 
   1. we add this rule because rule number 2 specifies that no two VMs inside the domestic animals virtual network can talk to each other. 
3. Virtual Network  - The next hop of Virtual Network means it takes the default Azure routing. We would want to use this for our exception to rule number 2 which is traffic inside the dog subnets ie 2 VMs inside the Dog subnets - should just take the default Azure routes and not traverse through the ZooKeeper because that would just cause too much burden on the ZooKeeper appliance. 
4. Virtual network gateway - This is specified when you want the traffic to go through the Virtual Network Gateway.
5. Internet - This is the next hop you specify when you want traffic to take the Microsoft backbone or the internet route. By default when you create a Virtual Network Azure creates a 0.0.0.0/0 route to the internet - this quad zero is a special route - which essentially means anything which does match any other rule follow this rule - sort of like a catch all

Awesome just to recap we discussed how azure routes traffic by default using system routes 2) how routing priorities work in azure 3) what is a user defined route and how can use it for our advantage. 

If you want to understand more about special cases like Service Endpoints and how that changes routing - please check out the video I made on service endpoints. 



Thank you for watching I will see you agian in the next video 