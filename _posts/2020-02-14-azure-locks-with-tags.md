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
  image: /assets/blogposts/2020-02-14-azure-locks-with-tags/banner.png
  caption: "blog.azuremonk.com"
---


Azure can prevent accidental deletion of resources using Azure Locks.



![alt](/assets/blogposts/2020-02-14-azure-locks-with-tags/oldnews.gif)













Well, thats stale news isn't it? This has been around for a while. 

But imagine you are running a large organization and every division has its own Azure subscription and every team owner has "Contributor" rights. What if the individual subscriptions under the Central IT needed permissions to create their own locks? By default you would not be able to - why ? Because creating lock requires the following permissions - Microsoft.Authorization/* or Microsoft.Authorization/locks/* which is available with the built-in Owner and User Access Administrator role. 


Besides the built-in role here are the two options you can achieve this: 

1. Create a custom role with the following permissions with one of the following permissions added:
   1. Microsoft.Authorization/locks/* (OR)
   2. Microsoft.Authorization/*  
   
You preferrably want to give the least restrictive privelge 

2. Use tags to create resource locks 
   1. Let the individual team tag thier own resource with the "Lock" value to yes or no

Please note that this only works with "CanNotDelete" lock and not the "ReadOnly" lock. Why? Once you set the ReadOnly lock the users wont be able to toggle the value at the end of it. (its a catch 22)

```powershell

New-AzResourceLock -LockName LockGroup -LockLevel ReadOnly -ResourceGroupName $rg.ResourceGroupName -Force

}

foreach($rg in $rgs)
{

$lockId = (Get-AzResourceLock -ResourceGroupName $rg.ResourceGroupName).LockId
Remove-AzResourceLock -LockId $lockId -Force
}


$to = @{
"Lock" = "ReadOnly"
}

$to =@()
$tags = (Get-AzResourceGroup -ResourceGroupName aksworkshop ).Tags


````