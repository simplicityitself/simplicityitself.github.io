---
title: What the Life Preserver Does - An Intro
layout: post
author: Russ Miles
date: 2015-06-11 12:18
image: images/vis/clouds1.jpg
categories:
 - Our Team
tags:
 - architecture
 - microservices

redirect_from: 
  - "/public/latest-news/what-the-life-preserver-tool-does-an-intro/index.html"
  
---

I am just in the process of writing the design and architecture sections of my book on LeanPub, “Antifragile Software: Building Adaptable Software with Microservices”, and so I thought I’d drop some snippets of what’s coming here as well.

This part of the book aims to help you either migrate from a monolith or to approach a green field project while sensibly deciding on what components of your system need to be present, what granularity those components need to be, and which components would make good candidate micro services. To achieve this I use a diagrammatic tool I invented for just this purpose, the Life Preserver.

In software development, great diagrams can be judged according to two things:
<ul>
	<li>What questions they answer</li>
	<li>What questions they ask</li>
</ul>
The Life Preserver tool is a diagram that does the following:
<ul>
	<li>Helps you decide where your components goes</li>
	<li>Helps you decompose your components so that they can have a single responsibility</li>
	<li>Help you visualise how the pace of change affects the components in your system</li>
	<li>Helps you decide how de-coupled components in different areas of your application need to be based on the differences in speed and frequency of change.</li>
	<li>Helps you decide to spin-out microservices from your design to best effect.</li>
</ul>
To do this the Life Preserver is usually developed using the following main phases:
<ul>
	<li>Organise, Reduce and Encapsulate your components across your system’s architecture</li>
	<li>Group Components that change together, together</li>
	<li>Decide on the appropriate level of de-coupling between components</li>
	<li>Where useful, convert components into simple, event-driven components using CQRS strategies.</li>
	<li>Decide what components to implement Postel’s law within in service of the de-coupling of the contracts between components</li>
	<li>Decide which components make good candidate microservices that therefore need to be spun out into their code repositories so that they can be evolved at their own rate.</li>
	<li>Decide on the integration strategies and patterns that need to be applied between your microservices.</li>
	<li>Decide where micro service pipelines will help the comprehension and simplify your microservices.</li>
	<li>Decide objectively on the choices of implementation on a per-microservice basis</li>
</ul>
When you’re experienced with the Life Preserver these steps are not exactly sequential in terms of how they are applied. However for the purposes of the book, and to make it easier to learn them, they are presented in the book in sequence as we build a real-world system that needs to evolve at the speed of the surrounding business’ need to innovate and compete.





