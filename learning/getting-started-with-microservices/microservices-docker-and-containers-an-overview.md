---
title: Microservices, Docker and Containers&#58; An Overview
layout: article
author: Simplicity Itself Team
categories: Getting Started With Microservices
---

For many coming to Microservices for the first time, it appears that the concept of containerised application deployment, as now epitomised now Docker, has become synonymous with Microservice development.

The advance of the Docker project has been nothing short of astonishing. Advancing from an internal project released as open source by <em>dotCloud</em>, a PaaS provider, through massive community adoption to the point that dotCloud reoriented around Docker and shed it’s PaaS business. <em>dotCloud</em> is now known as Docker Inc.

Docker now features in seemingly every technology conference, it is being adopted into most PaaS implementations and has a very varied and remarkably well funded set of startups forming around it.

From the point of view of Microservices projects the question is, how important is Docker and how should it be used, if at all?

<h3>The Concept of the Container</h3>

An operating system container is not a new idea, and has been present in server class operating systems in one form or another for decades.

The job of a modern operating system is to provide access to various resources in some standard way and share it between the running processes. Container technology takes this idea and strengthens it. Instead of merely sharing access to networks, filesystems, cpu time and memory, container technology segregates it.

A container can be given a restricted amount of CPU, a limited amount of memory and a network setup that runs independently of the other containers.
<h3>Virtualization</h3>
This sounds very similar in concept to hardware virtualization that is still causing a large shift in the way that we build and deploy applications.

In fact, it is similar. It is predicated on the same idea, reducing the resource overhead that an application requires while giving it enough isolation to run as consistently and securely as <em>you want it to</em>.

This last point is important, as virtualization gives far stronger isolation guarantees between the virtual machines than a container based solution will, however it does so by giving a different runtime environment that will have different characteristics.

<h3>Docker</h3>

The original underlying container technology in Linux was contributed by Google. This kernel side system has to be controlled by a user space library. The main system that grew up in this space is called LXC.

Docker was first developed as a client that sits on top of LXC and allows the easy creation of containers and management of container <em>images</em>. These images are essentially filesystems with a configuration file that gives a startup profile for the process that runs inside the container.

The genius of Docker was to focus heavily on the user experience of the client, making it a single command to download an existing image and boot it into a running container. This has given it broad adoption in the developer space, which is bleeding over into the operational and infrastructure world. Developers are now demanding that they can deploy the containers they have built their application inside of.

Today, Docker, Inc has removed the LXC dependency and through their <em>libcontainer</em> project have a full stack of container technology all the way through to the kernel.

They have a large market of pre-packed containers for many, many applications, databases and technology development stacks. They appear well positioned to begin consuming the virtualisation marketplace from the bottom, in yet another iteration of The Innovator's Dilemma.

<h3>Microservices and Docker</h3>

The burning question then, is Docker, or another container solution, a requirement for a Microservices architecture?

We consider 3 things absolutely necessary for Microservices to work:
<ul>
	<li><em>Service Discovery</em></li>
	<li><em>Automated Monitoring and Management</em></li>
	<li><em>Low friction deployment</em></li>
</ul>

By this measure, the answer to the question, "is Docker necessary?"  can only be <em><strong>No</strong></em>

It is an enabler and can give significant benefits. It is not, however, a hard requirement for Microservices in the way that <a title="Service Discovery Overview" href="http://www.simplicityitself.com/learning/getting-started-microservices/service-discovery-overview/" target="_blank">Service Discovery</a> is.

We have found that Docker, or other container technology can be useful in one or both of your Deployment Infrastructure and as part of your Development Approach. It is not always appropriate, and at this point of the adoption cycle, there is little in the way of consensus on a 'best practice' approaches for using the technology.

<h3><em>Simplicity Itself Recommends</em></h3>

Take a moment and consider: what you want out of this discussion of Docker and friends?

Framed slightly differently:  What is the real problem that you have?

At this point of Microservices adoption cycle, the technical solutions are extremely varied and it is easy to become disoriented. Stacking up virtualization against containerisation often leads into the various technical details on security, access control and the like. For us, this misses the point. You never want a technology for it's own sake, you want it to deliver value to you.

We take a philosophical view of software development, and that process demands that you should premise your evaluation of Docker and alternatives on your overall goals and motivations for developing a Microservices architecture. What are the architectural principles that have led you to Microservices?

We guide clients towards identifying and harnessing change pressures as their overall architectural principle, as it enables future innovation.  In order to meet that need, you must develop technical options for the future, known as <em>optionality</em> in Antifragile thinking.

This premise has significant implications on what you will want out of your deployment architecture, your supporting infrastructure, system design and development approach. It, in many circumstances, leads to Microservices, which is why Simplicity Itself has specialised in this field, our architectural principles guided us here.

Whether you need to use Docker or not will fall out of this evaluation as a purely technical, and so tactical, decision, not as a strategic one.

Read more on the <a title="Designing Microservices Overview" href="/learning/getting-started-microservices/designing-microservices-overview/">Design process for Microservices</a>

Read more about Docker, and other options for <a title="Microservice Deployment Overview" href="/learning/getting-started-microservices/microservice-deployment-overview/">Deployment Infrastructure</a>

<div style="vertical-align: top; text-align: left; font-size: 1.5em; display: inline-block; width: 40%;"><span style="color: #000080;"><a style="color: #000080;" title="Getting Started" href="/learning/getting-started-microservices/microservices-docker-and-containers-an-overview/"><strong>&lt;- Getting Started</strong></a></span></div>
<div style="vertical-align: top; text-align: right; font-size: 1.5em; display: inline-block; width: 45%;"><span style="color: #000080;"><a style="color: #000080;" title="Service Discovery Overview" href="/learning/getting-started-microservices/service-discovery-overview/"><strong>Next : Service Discovery -&gt;</strong></a></span></div>
