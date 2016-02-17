---
title: Sharing Code Between Microservices?
layout: post
author: Simplicity Itself Team
categories: [Our Team]
tags: [architecture, data schema, DRY, life preserver, microservices, muon, netflix, netflix oss, sharing]
redirect_from: 
  - "/our-team/sharing-code-between-microservices.html"
  - "/our-team/sharing-code-between-microservices/index.html"
---
My good friend Peter Ledbrook has been pondering the question <a style="color: #228;" href="http://blog.cacoethes.co.uk/software/code-reuse-in-micro-services">"how can we share code between microservices"</a>

This is something we've had the opportunity to experiment with, on new projects and also longer running systems. This has given us some insight, which I'm happy to share here.

The process for building a new microservice is pretty well established by now.
<ul>
	<li>Define the service contract</li>
	<li>Expose on a network (somehow, http, messaging, or hopefully soon our <a href="https://github.com/simplicityitself/muon-documentation" target="_blank">muon lib</a>)</li>
	<li>Profit?</li>
</ul>
....

&nbsp;

Sorry, that was mean of me!

More seriously then. In many of our conference talks we drop down to first principles and philosophy and I want to do that here too, as the answer to the question above can only be found when the real, underlying question is asked.  So, what is your motivation for building a microservice?

That will frame your answer, and we've found that the motivations for using microservices are actually fairly varied depending on the environment.

So, why make a microservice?  Some of the typical answers we get when we ask are  :-
<ul>
	<li>Independently scale</li>
	<li>'Ability to innovate'</li>
	<li>Service isolation</li>
	<li>Separate service life-cycles (deployment, build etc)</li>
	<li>Monitor usage via gateways</li>
</ul>
Our take is that these are all attempting to handle some form of <em>change</em>. This is what we always look for , change in the environment, change in the codebase. Differing rates of change between two areas are almost the sole guide that we use for splitting services apart. <a style="color: #228;" title="What the Life Preserver Tool does, an intro" href="/public/latest-news/what-the-life-preserver-tool-does-an-intro/" target="_blank">read more</a>

These all sit on the concept of <i>isolation </i>of one form or another. This underpins almost all of the benefits, and almost all of the costs of microservices. Creating and maintaining that isolation barrier we know as the service contract. Microservices go one layer above something like OSGI, as they enforce a network hop in the service barrier, creating an extra air gap, so they are highly decoupled from a code execution point of view.

All of this setup is to create isolation<em>.</em> That isolation<em> </em>enables the other benefits of microservices.  This is the key point.
<h3>Code Sharing</h3>
So, sharing code. Why would we do this?

Primarily, I've found that developers and organisations want to share code across microservices for only a few reasons, although they may couch them in different terminology. This list is not complete, but takes in the majority.
<ul>
	<li>Leverage existing technical functionality, eg, the impressive array of Netflix OSS libs, Guava, other utils.</li>
	<li>Sharing data schemas, using a class, for example, as an enforcement of a shared schema.</li>
	<li>Sharing data sources, use of the same database by multiple services.</li>
</ul>
&nbsp;

It is of utmost importance to pin down your motivation for wanting to share code, as unfortunately there is no right answer to this question. Like everything else, it's contextual.

The order of the list above is important, I arranged them in how much coupling they will create across services, from least to most, with the most coupling created by sharing control of runtime data, through sharing a data schema, sharing technical/ infra libraries, to finally sharing nothing.

Code sharing, as when sharing anything, will always act to attach your services together via the shared code. This is unavoidable. The question you need to ask, is it worth it to do so?

You are crossing the isolation barrier, and so you <em>are</em> reducing the effectiveness of it. By sharing nothing, you are giving it the maximum possible effectiveness. That, though, also comes at a cost.

When you build a new service and share nothing, you feel like you have 'lost' the functionality that is available in the other services. In fact, you've traded it away to give yourself more isolation, by sharing more, you lose more isolation.  You gain the convenience of using existing code, at the cost of coupling more tightly to the other services in the system.

This demonstrably does occur even when you are sharing only technical libraries.  I'm sure that any Netflix guys (or other larger microservices implementations) reading can attest to "build the world" CI storms if one of the base libraries are changed. This is witnessing the infamous <em>ripple effect</em> in full force. Those seemingly innocuous, merely technical libraries will start to gain a whiff of 'scary'.  This is because altering them will cause a large scale redeploy of services unrelated the one being developed. Developers will start to avoid them if possible, for fear of the unknown effect that you may create.  There lies legacy ...

This, then, is just at the lowest level of sharing. If you attach at a higher level, sharing schemas, or even control of the data (via the sources), then you will suffer the ripple effect more often and it will hurt more when you hit it.  You will be carrying the cost of maintaining a microservices based architecture, without gaining the benefits of isolation, because you've shortcircuited it.
<h3>Micro vs Mono</h3>
This is a fairly stark message, but one that I can't avoid.   If you want convenience, build a monolith. They are significantly quicker to start a new project with, quicker to be able to alter the service boundaries as desired. To be able to get that initial jolt of primary development, they are the <em>right answer.</em>

For more sustained innovation and ability to change <em>anything</em> as desired, you must work to reduce the sharing between areas of the system to allow them to move independently of each other. Our <a style="color: #228;" title="What the Life Preserver Tool does, an intro" href="/public/latest-news/what-the-life-preserver-tool-does-an-intro/">life preserver</a> design process and tool takes relative rates of change as the core concept, and so was built to guide this process. It's ideal for figuring out how to build microservices.

There is a continuum then, a constant tension between isolation and re-use. To lean to one is to lean away from the other. The discussion on <em>what</em> is shared has some value, but sharing anything has the same effect, just a greater or lesser severity.

The choice on which way you lean is of course, up to you.

The natural progression that we now expect in new Microservices implementations is :-
<ul>
	<li>Prepare the ground (the ability to break services off)</li>
	<li>Build a Monolith in the primary development phase</li>
	<li>As areas of the system stop changing, break them off as new services behind their stable barrier.
<ul>
	<li>At this point, they should share almost nothing with the monolith it has been pulled out from</li>
</ul>
</li>
	<li>During ongoing/ secondary development, new areas start life as new services.</li>
</ul>
&nbsp;

If you'd like more info, we run a course on <a style="color: #228;" title="Building Antifragile Software with Microservices" href="/training/courses/building_adaptable_software/" target="_blank">building Microservices</a> that goes deeper into the rationale, philosophy and tooling.

&nbsp;

<hr />

<strong>Simplicity Itself 'The Knowledge'</strong>

We release our blogs and articles to our mailing lists a day or so before making them public.  Sign up for 'The Knowledge' from Simplicity Itself for advance access and regular updates on Microservices, system architecture and our experiments in software.
