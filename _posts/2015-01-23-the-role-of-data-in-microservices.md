---
title: The Role of Data in Microservices
layout: post
author: David Dawson
date: 2015-01-23
categories: [Getting Started With Microservices]
tags: [archi, architecture, data flow, data schema, design, mi, microservice, microservices]
redirect_from: 
  - "/our-team/the-role-of-data-in-microservices.html"
  - "/our-team/the-role-of-data-in-microservices/index.html"
---
When approaching development of Microservices, it's often easy to think of the services themselves as the valuable pieces of your system. each service you add gives you more functionality, and so more value.   For the majority of systems we have built and reviewed during our consultancy, we have found that the system itself is of fairly marginal value. Instead, the data that it contains and the intelligence it can provide based upon that data is what is actually valuable.  This seems a subtle, even academic distinction, but it is important and putting it at the forefront of your mind during design has significant repercussions on the way you build your services and the way that they interact with each other.

Once you do this, the 'discussions' over what should be a service and what shouldn't be becomes far less abstract. Everything is being built to efficiently process, store and present your data. Nothing else really matters when you think about it.
<h3>Design your Data</h3>
With this in mind, your data, and the flows of data through your system become far more important. The components that do the processing have to be there, but you actually want your data there. If you could get rid of your system components while still having your data processed, you would in a heartbeat. Keep that in mind.

In a Microservice architecture, these flows of data will always exist. Generally, they are implicit, only existinging in the ephemeral nature of the communication between services. They can, however be explicitly built in, with services that actually implement particular data flows. We call this explicitly implemented data flow a <em>pipeline.</em>

This is not a new concept, And many of you will have built just such a thing. Often you will have felt the need to grab a technology such as Storm or Spark in order to handle a flow of data. When you are doing that, you are building what we refer to as a pipeline.  If you have ever built such a thing, take a step back and think about the flow of data in the abstract sense. Try to unpick other flows of data in your application.  When building a set of Microservices, it's fairly common to have a call stack of a half dozen or so services with data from the back making it all the way to the front with transformer services in between. This is, in effect a set of transformers on top of a stateful resource. It's an implicit pipeline, and can be thought of as a system data flow.
<h3>Pipelines of Data Flows</h3>
Once you have seen this, you can begin to extract this as a concept, and make it concrete. This gives you some significant benefits!  Error tracking in a Microservice system can sometimes be fraught with difficulty. Tracking a request from one end of a call chain to the other can be difficult and tracking through logs and correlating identifiers can be a serious chore.  These kind of errors and issues are speaking to you about misaligned abstractions, errors in thought and design, not errors in your implementation.

Here, we advocate re-aligning your thought and design to be in tune with reality instead of working in opposition to it. If you have a system that is based around data flows, you need to align your code abstractions with that. The concept of the <em>Entity</em> as we often construct it is of little value and will only serve to get in the way.

Taken to a conclusion, this process of building abstractions around data flow will lead you to a system that is a set of parallel pipelines, explicit services implementing each of your data flows. These pipelines call out to stateful services to obtain data and stateless services to transform it.

Tracking errors in a system designed like this is simple, as all the high level processing for a data flow will be located in a single location, not smeared over the web of Microservices.

This doesn't prevent you from gaining all the benefits of Microservices, quite the opposite in fact. You still have all the options you did before, plus by localising a particular data flow into a single service, you gain the option of regaining some of the transactional behaviour you may have sacrificed along the way.
<h3>The 'State Problem'</h3>
You will have noticed that I referred to some services as <em>stateful</em> and others as <em>stateless. </em>These are fairly overloaded terms that often confuse. What I mean in this case is that some services give access to data at rest, and others don't. Stateful services often don't contain any data in their memory, instead fronting a data store. Similarly, stateless services may in fact be chock full of data in the form of cache, but don't give access to data at rest in any meaningful sense.

Even with the slight clumsiness of overloaded terminology by making this distinction you can tie data flows together quite easily. A Pipeline is fully stateless, even though it will have data pouring through it constantly. It may transform data, but it should do that immutably. Immutability means that during transformation, you are generating a new <em>value</em> from the original <em>value</em> obtained from a stateful service. No change has occurred in the original data, no <em>state</em> has been altered. The only way that state can alter is by referring back to the stateful service. This also, handily, eases the conceptual problem some developers have with loss of consistency. By viewing the only place where state lives as in some stateful service, and seeing data moving immutably through the system, the concept of an 'entity' being read from a data store, change and written back is removed.
<h3>Immutable Data Flows</h3>
With that, we have the final way of looking at data in a microservice architecture. Immutable data flows implemented as pipelines.

By applying this, you gain the benefits of a single place to look for everything related to a flow of data, within the pipeline, and you gain the benefits of being able to take data and radically alter, mutate, transform and derive new data without becoming concerned with mutation of state.

This leads very nicely into CQRS and then into Event Sourcing very nicely.

We have just come to the end of a small demonstrator project that is the focus of a use case we will be releasing to our 'Knowledge' Subscribers in the next couple of weeks and publicly in a couple of months.
<div style="text-align: center;"><a href="/learning/knowledge" class="button medium">Sign up here</a></div>
<div style="text-align: center;"></div>
<div style="text-align: left;">Tareq Abeddrabo wrote a thought provoking article on the subject of data flows <a href="http://www.terminalstate.net/2013/12/the-warehouse-and-shop-floor-separation.html" target="_blank">"The Warehouse and the Shop Floor: Separation of Concerns Based on Data Flow"</a>   Highly recommended.</div>
<div style="text-align: left;"></div>