---
layout: article
title: Retiring Microservices Using Strangulation
author: David Dawson
categories:
 - Microservices and Reactive
---

No programmer likes to plan for their work to be taken offline and shutdown, but part of good antifragile thinking is allowing things that aren't successful, to end. Applying that to Microservices, one of the natural parts of that architectural style is creating and destroying instances of a service. As part of the lifecycle of services, you sometimes have to create different versions of a service, and so manage the retiring of a previous version (although we try to avoid versioning where possible).

One part that you can't avoid is the ultimate killing of an entire service. Eventually, your model of the world will not match the reality, and so you <em>must</em> then kill that service or you will find that changes become progressively harder as it drifts away from reality.

There lies legacy, a system that is hard and expensive to change and is becoming progressively out of touch with it's current environment.

Nobody wants that, so how should you go about killing a service?
<h3>Motivation Matters</h3>
Why you want to kill the service matters.

I see two broad motivations for removing a service that influence the approach you need to take during the retirement process, which I classify as <em>Demand Driven and Supply Driven.</em>
<h4><em>Demand Driven</em></h4>
In the Demand Driven case, the service in question is becoming less and less used. The demand for it is becoming progressively lower over time, and you are looking at it's removal as a recognition this. This may be because you have a newer version you are running in parallel, or just that the service isn't that useful anymore. This tends to be a very passive approach, you let it whither and die and your interaction is mainly to mainly to monitor it to understand when it can be deemed as dead and switched off.
<h4><em>Supply Driven</em></h4>
Supply Driven removal is where you have some external motivation for removing service beyond lack of use. Your ability to continue supplying the service to the rest of the system is going to be removed, and so you must kill the service even though it's still in use. This is an active approach, and involves identifying the impact of the removal, understanding the valuable functionality of the service and where that should reside post removal.
<h3>Strangulation</h3>
The process of microservice retirement feels very similar to decommissioning of a 'legacy' system, for those readers that have performed that feat of extraction. We have found that the process to be applied can be the same in both cases.

Following that instinct, what lessons could we learn from the past decommissioning processes and techniques?

[rps-include-content post="1559"]

One of the better known and more powerful approaches for decommissioning systems is known as the <em>Strangler Application</em>. This was identified by Martin Fowler <a href="http://www.martinfowler.com/bliki/StranglerApplication.html" target="_blank">back in 2004</a> as a way to safely remove or replace a legacy application while still delivering business value.  This is now <a href="http://paulhammant.com/2013/07/14/legacy-application-strangulation-case-studies/" target="_blank">fairly</a> <a href="http://agilefromthegroundup.blogspot.co.uk/2011/03/strangulation-pattern-of-choice-for.html" target="_blank">well</a> <a href="http://cdn.pols.co.uk/papers/agile-approach-to-legacy-systems.pdf" target="_blank">documented</a> and understood and is the approach that we use to decommission systems, identifying value and extract it. Should the retiring of Microservices be any different?

No, and yes.  They are a system the same as any other and the techniques that have been described in the past <em>are applicable. </em>Their highly network distributed nature means that the approach needs to be slightly more nuanced.  That nuance is what I would like to discuss here.

The high level approach of the Strangler is to understand the data/ event flows in and out of a component and incrementally redirect them to a new location that you build alongside or around it.  Once all of the event flows are intercepted, the component is no longer being used and can be switched off.
<h3>Data</h3>
Event interception then is key. You have to understand the application or service in terms of its data flows, not it's functionality per se.  Identifying the data flows that remain in use and remain valuable is an integral step towards being able to remove the services that for part of that data flow.

One of the benefits of a Microservices approach is that your systems are (<a title="Approaching the Design of a Microservices Based Architecture" href="http://www.simplicityitself.com/learning/the-life-preserver/approaching-the-design-of-a-microservices-based-architecture/" target="_blank">or should be</a>) well split apart into separately evolving pieces. This is different to a 'classic' legacy decommissioning, as you are cutting a single service, not the system as a whole.

This means that you need to be able to intercept events between services, rather than just those coming from outside. Having some rich system of monitoring intra-service communications and using that as the basis of reasoning about the system.

In a future article, I will discuss how this can actually enable the component health checks so beloved of microservices frameworks and tutorials to be slimmed down, and even removed in many cases.
<h3>Measure the Impact</h3>
Once you understand the data flowing through your services, you are in a position to begin to reason about altering how those event streams are processed.

This reasoning process is influenced by your motivations above. If it's demand side, you just wait. You now have the information you need to be able to declare a service to be dead

If you are actively removing a service, though, you need to be start judging the impact of reworking these event flows and how far that impact might spread through your system.

Tools for this vary, depending on how permeable your service contracts are. You may be in a position to only traverse as far as the direct service dependencies in order to understand the impact. This will be the case if your service boundaries are very strong. One of the aspect of microservice design helped by <a title="Development by Slogan:Part 1, Really DRY" href="http://www.simplicityitself.com/our-team/development-by-slogan-dry-part1/">reducing your reliance on DRY</a>

Otherwise, you may need to apply graph theory and tooling to understand the impact of the service being removed.
<h3>Summary</h3>
Retiring a service isn't something that you should put on your todo list, it's an integral part of your microservice setup and you need the capability from day 1 or you will have begun to develop a legacy problem under the guise of Microservice development.

Baking in the ability to remove a service requires understanding and monitoring of the event flows. In turn, this requires the large scale monitoring of inter-service communication and the ability to comprehend what that is telling you. The data collection capability is fairly straightforward to add in up front, but requires more effort to retrofit, so we recommend that you do it up front as part of your initial rollout if you are adopting Microservices for the first time.   Comprehension of the event flows is a subject in itself, which we will be discussing in a future article.

[rps-include-content post="1345"]