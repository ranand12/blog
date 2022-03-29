---
title: "aks patching and node pool upgrade azure kubernetes services (aks) explained in plain english"
description: "aks patching and node pool upgrade azure kubernetes services (aks) explained in plain english"
categories:
  - videos
layout: single
excerpt: "aks patching and node pool upgrade azure kubernetes services (aks) explained in plain english"
header:
  overlay_color: "#333"
link: https://www.youtube.com/watch?v=Afl72C-FEMg
permalink: "videos/aks-taints"
header:
  og_image: /assets/blogposts/video/aks-upgrades.gif
  teaser: /assets/blogposts/video/aks-upgrades.gif
  overlay_color: "#333"
---

{% include video id="Afl72C-FEMg" provider="youtube" %}

This is part 3 of a multi-part series explaining "everything you need to know about node pools in Azure Kubernetes Services AKS" in plain english using animations. For part 1 click here https://youtu.be/aGT3UtZoiA0 and part 2 please click here - https://youtu.be/45UxnRj11_g

In this video we will talk about: 
1. The different patching and upgrade options for nodepool - Kubernetes Version upgrade and NodeImage upgrade
2. The upgrade process using cordon and drain methodology
3. Auto upgrade channels and options for AKS


### Commands from the video

## Command to list the kubernetes version and the available kubernetes version upgrades on control plane 

az aks get-upgrades \
   --resource-group ResourceGroupName --name AKSClusterName --output table

## Command to list the kubernetes version for all the nodes in your nodepools 


az aks nodepool list \  
   --resource-group ResourceGroupName --cluster-name AKSClusterName \
   --query "[].{Name:name,k8version:orchestratorVersion}" --output table

## Upgrade kubernetes version on all nodes at once 

In order to upgrade all nodes at once - we run the following command, this will upgrade all control plane and worker nodes at once to the desired kubernetes version

az aks upgrade \
   --resource-group ResourceGroupName --name AKSClusterName \
    --no-wait \
   --kubernetes-version KubernetesVersion

## Upgrade kubernetes version on control plane alone 

If we only want to upgrade the kubernetes version for control plane alone - we run the same command but with the --control-plane-only switch 

az aks upgrade \
   --resource-group ResourceGroupName --name AKSClusterName \
   --control-plane-only --no-wait \
   --kubernetes-version KubernetesVersion

## Upgrade Kubernetes version on specific node pools

If we need to upgrade the kubernetes version on only specific node pools we can run the following command by specifiying the nodepoolname and the kubernetes version 

az aks nodepool upgrade \
   --resource-group ResourceGroupName --cluster-name AKSClusterName --name NodePoolName \
   --no-wait --kubernetes-version KubernetesVersion


## Nodepool image upgrade 

Running the following command lists all the current nodeimage versions of the  nodepool 

az aks nodepool list \
   --resource-group ResourceGroupName --cluster-name AKSClusterName \
   --query "[].{Name:name,NodeImageVersion:nodeImageVersion}" --output table


the following command to list the available latest nodeimage version for us 

az aks nodepool get-upgrades \
   --resource-group ResourceGroupName --cluster-name AKSClusterName \
   --nodepool-name NodePoolName --output table


## Upgrade nodeimage version for specific nodepool 

In order to upgrade the nodeimage vefsion for a specific nodepool we run the following command : 

az aks nodepool upgrade \
    --resource-group myResourceGroup \
    --cluster-name myAKSCluster \
    --name mynodepool \
    --node-image-only

az aks nodepool show \
    --resource-group myResourceGroup \
    --cluster-name myAKSCluster \
    --name mynodepool

## Upgrade nodeimage version for all nodepools at once 


az aks upgrade \
    --resource-group myResourceGroup \
    --name myAKSCluster \
    --node-image-only

Remember If you don’t run the nodeimage switch remember the whole cluster including the kubernetes version of the control plane is also upgraded.

az aks show \
    --resource-group myResourceGroup \
    --name myAKSCluster


#azure #aks #nodepools #kubernetes #upgrade #cordon #drain #explained #plainenglish

For more simplified video tutorials on Azure and Kubernetes - check out www.azuremonk.com