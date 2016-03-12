---
title: The Minilith - Tightly Coupled Microservices
layout: post
author: David Dawson
date: 2016-03-11 12:18
image: images/vis/clouds1.jpg
categories:
 - Our Team
tags:
 - architecture
 - microservices

---

Without a doubt, Microservices as an architecture has grasped the imagination of modern development like no other.

We've found that, contrary to what many will tell you, it defies [tight definition](http://www.simplicityitself.io/microservices%20and%20reactive/2015/06/16/defining-microservice-architecture.html). Specifying how microservices should interact with each other, how they should store and master data, and how they should be deployed is great for a conference talk, but the style has been adopted too broadly now to be prescriptively tied down by anyone. Opinions abound, and yet you will find **no** consensus in what microservices actually are beyond the use of some form of effective isolation, usually network based. 

This lack of definition is in many ways good. In fact what it allows is the creation of many definitions, all of them good for different purposes and different reasons.

The Agile wars seem to be coming to an end, I truly hope we won't now have the Microservices wars, another strain of dogma would frankly be upsetting.

WIth that in mind, I sat down to read about and then watch a recent [talk by Ben Christensen](http://www.infoq.com/news/2016/02/services-distributed-monolith)

I recommend you watch, it's an interesting take, and one worth analysing for yourself.

I've written on the perils of DRY [a](http://www.simplicityitself.io/our%20team/2015/01/01/development-by-slogan-dry-part1.html) [fair](http://www.simplicityitself.io/our%20team/2015/01/08/development-by-slogan-dry-part2.html) [amount](http://www.simplicityitself.io/our%20team/2015/01/09/development-by-slogan-dry-part3.html), and so to a large extent I totally agree. Where I diverge from much of the discussion is on the principle of autonomy and runtime coupling. Here, I am certainly a huge proponent of generating autonomy between services. The more a service can orient itself and figure out what to do, the better.

This though, is an arbitrary statement, and digging deeper, is fairly biased towards a certain definition of 'a good microservice'.

This definition hinges purely on being able to change this service with scant regard for others in the system, the principle of *autonomy*. When analysing the benefits of this though, you have to step back to the original business benefits that you are implementing. *Autonomy* gives powerful benefits, but could it be overriden by other business needs in some circumstances?

The simple answer is yes, sometimes full autonomy for an individual service isn't worth the investment to create. To create a fully autonomous service, you need to go through a set of steps, deliver a set of capabilities.

Briefly :-

* Handle versioning/ upgrade
* Be able to run multiple versions of the service at once
* Have a lot of tolerance in your data source schema (eg, a relational DB schema) for upgrade.
* Have effective Continuous Delivery process.
* Disciplined and mature team.

If you can do all these things well, you can generate fully autonous services. If you can't, what then?

## Regulated Environments

We recently came across this on a client project. This project is undergoing a major decomposition effort, building of a new team and biggest impact of all, becoming adopted into a regulated environment.

All together, this leads to some interesting requirements and dare I say it, compromises.

One thing that has been picked up early is *how do we deploy*. The continuous delivery question, how can we deliver features effectively, and as we need to. The issue here is one of dependencies between services, and how to handle them.

We considered full vertical slicing of services a la Amazon to gain full autonomy, but that ran into the issue of our application of CQRS, we are splitting the read and write paths across different services during the decomposition. The original monolith is keeping the majority of the write paths for the initial phase.

We thought about a 'classic' microservices approach, individual service deploys, full autonomy. This fell foul of a few things. The team is new, and so doesn't have the cultural knowledge on how to handle versioning well built up yet for this application. 

More importantly, how to do CD in a regulated environment. The biggest impact is that tests on the deployment stored for approval tend to be systemic, rather than service based. Evidence needs to be stored for years. Lots of fun impacts.

We also had to plan to fail. When slicing services, it's certain that you will get the initial cut points wrong, even if only by a little. This means that feature development *will* span services, the only question is how much?

Given that, you have to be able to handle dependencies between services during deployment somehow to fully stand up a new feature. You'll need to upgrade databases in stages, update service APIs while serving traffic etc. Without a strong understanding upgrade and versioning, this is hard.  The regulatory impact leaves us required to have a deterministic runtime architecture, with evidence to show how it performs stored, version controlled and retrievable at will.

## The Minilith

The end result is that we compromise autonomy in favour of determinism.

We accept that deployment is broader than a single service, and that there are dependencies when deploying certain services, there is an order.

The concept of closely related services is not new. We use the term ***minilith***, invoking megalith, but smaller :-)

I pinched this term from [Gawain Hammond](https://skillsmatter.com/legacy_profile/gawain-hammond), currently of the Sky Tech Futures team.

A megalith is a collection of standing stones, most often interlocked in some way. Stone Henge is probably the most famous, and works for the analogy. The stones were all arranged in concentric circles, with top stones linking them all together.

A Minilith is similar, in that there are strong connections between services. Without the surrounding services these would simply fail.

The point is that some services naturally deploy as logical unit. They are separate at runtime, but they can't exist without each other, and are effectively version locked.

You can see this in use in other areas. Take the Kubernetes *Pod*, for example. Essentially the same idea, but most often described as bundling helper processes, databases, logging and the like.

We propose that you consider taking this further. By extending the logical boundary you are wrapping around your service, you can gain many of the benefits of a multi process runtime (scaling, polyglot etc) without the full overhead of creating runtime autonomy. 

In my next article, I'll take advantage of the minilith to enable continuous delivery in a regulated environment. 

Then, we'll take a view through the data and deployment aspects.








