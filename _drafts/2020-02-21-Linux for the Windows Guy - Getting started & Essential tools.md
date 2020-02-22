---
title: "Essential Linux tools for the Windows guy"
last_modified_at: 2020-02-12T16:28:02-05:00
categories:

  - blog
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



**Windows Subsytem for Linux, Visual Studio Code + Windows Terminal** 



If you are coming from the Windows world and are relatively new to the Linux world, then these essential tool will be of great help to get you started and make your life easier. I will walk you through what each of them does in plain English & how you can set them up step-by-step.



- Windows Subsystem for Linux

- Windows Terminal 

- Visual Studio Code 

- TMUX

  

### Windows Subsystem for Linux (WSL)



#### What does it do ? 

The Windows Subsystem for Linux lets you run a Linux environment and most Linux command-line tools, utilities ( like TMUX, VIM, EMACS etc) and applications -- directly on Windows without really deploying a VM.  



#### How to set this up ? 

- **Step 1 - Enable Feature** - You would need to enable the feature from PowerShell. (Run as administrator - *will need a restart*)

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

- **Step 2 - Pick Distribution & Complete Install** - Here is the list of the distributions of Linux that you can install using the Microsoft Store: 

  - [Ubuntu 16.04 LTS](https://www.microsoft.com/store/apps/9pjn388hp8c9)

  - [Ubuntu 18.04 LTS](https://www.microsoft.com/store/apps/9N9TNGVNDL3Q)

  - [OpenSUSE Leap 15](https://www.microsoft.com/store/apps/9n1tb6fpvj8c)

  - [OpenSUSE Leap 42](https://www.microsoft.com/store/apps/9njvjts82tjx)

  - [SUSE Linux Enterprise Server 12](https://www.microsoft.com/store/apps/9p32mwbh6cns)

  - [SUSE Linux Enterprise Server 15](https://www.microsoft.com/store/apps/9pmw35d7fnlx)

  - [Kali Linux](https://www.microsoft.com/store/apps/9PKR34TNCV07)

  - [Debian GNU/Linux](https://www.microsoft.com/store/apps/9MSVKQC78PK6)

  - [Fedora Remix for WSL](https://www.microsoft.com/store/apps/9n6gdm4k2hnc)

  - [Pengwin](https://www.microsoft.com/store/apps/9NV1GV1PXZ6P)

  - [Pengwin Enterprise](https://www.microsoft.com/store/apps/9N8LP0X93VCP)

  - [Alpine WSL](https://www.microsoft.com/store/apps/9p804crf0395) 

    

  I chose Ubuntu 18.04 LTS for my example and complete the install by providing the user name and password for your instance: 

  ![](C:\Users\anandku\blog2\assets\blogposts\2020-02-21-WSL,Visual Studio Code,& Microsoft Terminal\installubuntu.gif)

  

- **Step 3 - Upgrade the packages** - Run the following commands to upgrade the packages 

This command ***does not*** automatically install new versions of the software. It updates the ***package lists*** for upgrades -  for packages that might need an upgrade or new packages that might just  fetches the list of update packages ( but does not download them yet)

```bash
sudo apt-get update
```

This command downloads the latest packages based on the previous update list

```bash
sudo apt-get upgrade
```



### Windows Terminal 



#### What does it do ? 

Once you have the WSL setup, the next thing is to install Windows Terminal. Your productivity will skyrocket once you install this and you can thank me later :) You can have multiple sessions of PowerShell, WSL, Good old command prompt, Azure Cloud Shell and much more ( this is super configurable) - all in **ONE SINGLE TERMINAL** !!



![](C:\Users\anandku\blog2\assets\blogposts\2020-02-21-WSL,Visual Studio Code,& Microsoft Terminal\windowsterminal.gif)



#### How to set this up ? 

This is pretty straight forward to setup - you can either download from the Microsoft Store (or) you can leverage 