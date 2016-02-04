---
layout: article
author: David Dawson
categories: Microservices and Reactive
title: Redefining The Microservice Architecture
---
Recently (June 2015), I gave a <a title="MIcroservices Done RIght" href="https://skillsmatter.com/skillscasts/6274-david-dawson" target="_blank">talk</a> at the DDD Exchange at Skills Matter in London.

This was a little last minute! Our CTO, Russ Miles, was originally scheduled to deliver at the conference, but he had to be out of the country visiting one of our partners and so I was drafted in to deliver.

This is a talk I've wanted to give for a long time, so while it was a little rough around the edges, the message is something we've been working with for a while.

It cuts to the heart of what we're doing, and why we're doing it.  It asks the question, "What is Microservice Architecture?", leading to "What is a Microservice?". Is this becoming debased, or can we pick out something useful?

For the last few years, Simplicity Itself has been on something of a mission to change the way that we approach building software. We have positioned ourselves very much in the space of 'architecture'. By that I certainly do <em><strong>not</strong></em> mean software design.

The difference is obvious when you think about it, there are as many designs are there are designers, infinite in potential. Architectures however ... that simply <em>feels</em> different, and putting your finger on the reason why is informative. We know that there are actually fairly few distinct architectures. Event architecture, 3 tier and so on. You can look at a piece of software and derive the architecture that it is implementing.

This simple cardinality check means that design cannot be, and is not, the same as architecture.

We approach architecture as the set of principles that guide you, the mental model that you apply, the process that you go through to analyse and engage with the world. It's not the solution, that is your design, it's what you use to guide you towards that solution.

Everything I've described there as architecture, I know well by another name.

Software Architecture is <strong><em>philosophy</em></strong>.

This re-frames the entire debate around Microservices Architecture. Technology details slip away, specific techniques become implementation only. Instead we attempt to derive the guiding principles, the philosophy that is drawing the industry along with it.

Instead, we can ask the question, what are the defining characteristics of a Microservices approach. This is a good question, one that we've spent the past year researching with our clients, asking at the <a href="http://www.meetup.com/London-Microservices-User-Group/" target="_blank">Microservices user group</a> we run and analysing the systems we come in contact with.

It's not HTTP, JSON does not feature. Docker is not the answer, and neither is devops.

The only commonality is<strong> <em>Isolation</em></strong><em><strong> between components</strong>,</em> enforced using a network boundary.

Nothing else is agreed upon.

Upon this one element, all of the <em><strong>benefits</strong></em> of a Microservices approach can be ultimately derived.

Upon this one element, all of the <em><strong>costs</strong></em> of a Microservices approach can be ultimately derived too.

This is the root.

Apart from this though, something else showed up in our research. A deep seated <em><strong>aspirational</strong></em> quality. The belief that a better way of software could be created, built upon this principle of isolation. This aspiration was most commonly expressed as '<em><strong>keeping up with change</strong></em>' or some derivative thereof.

<strong>Those two items, <em>isolation </em>and <em>aspiration</em>. Those are the defining qualities of Microservices today.</strong>

For us, this is hugely useful, as it very directly converts into a philosophical approach to building software, it forms the guiding principles that lead you towards many (although not all) of the techniques, technologies and processes that are currently being deployed in Microservices projects across the globe.

This does though leave Microservices as an architecture, not a method of adequate design. This is where we see projects going very wrong and not gaining the benefits that they expected to.

We have seen this often enough that we've come to term this the '<a href="/premium/Microservices-Adoption-Hump" target="_blank"><strong><em>Microservices Adoption Hump</em></strong></a>' (article by Russ Miles), getting all the pain of Microservices, without gaining the benefits.
<h2>Enter <em>Design</em></h2>
Fundamentally, Microservices is not a design, it cannot be, since it's an architecture. This has led to many teams applying their existing design skills to the new architecture and deployment style and wondering why things get hard.

So, we see many HTTP/ JSON based systems. Numerous attempts at large scale REST based systems.

This is because the team will have built HTTP based systems before, they are well understood, HTTP is widely implemented, and it seems the way to go.

The issue though is that HTTP/ JSON/ REST is <strong><em>not a design methodology</em></strong> either<em>. </em>It is an integration style. In the same category as messaging or RPC.

You still need to understand how to model a system, how to pull it apart into decently understood components, map out your flows of data, tie them back to business needs. The whole thing.

This is design.

Instead, what we see now are debates occurring in the Microservices space on what integration style is best. This is misguided, it's the wrong way round. You choose your integration style as an implementation, not as a guiding principle.

Discussion on how to effectively how to model an application when it is split out as Microservices are only just beginning to become public, and many of the arguments we see both publicly and privately are mimicking the object design wars of 10 years ago.

This makes me sad, as it's a blinkered, wasteful thing.

<strong><em>Domain Driven Design</em></strong> is, as the name implies, a design discipline. Proponents and researchers in the subject have spent the last 10+ years understanding how to model problems and build solutions using well known, well understood techniques.

It is as good a place as any, and better than most, in order to learn how to effectively model an application, whether you take advantage of the deep isolation that a Microservices architecture avails you of or not.

Watch the talk above for some specific examples of how this plays out. Buy Eric's book for some more information (read the second half first is my advice), find your local meetup and other web resources and connect into learning how to <em>design</em> software. We run a 3 day course on <a title="Antifragile Software: Building Adaptable Software with Microservices" href="/learning/building-microservices-course/" target="_blank">Building Microservices</a>. This is effectively a course on how to design software using events that cross network boundaries all the time, which describes a microservices system handily.
<h2>The Microservices Community</h2>
Dan North tells a good story around the concepts of a <strong><em>bounded</em></strong> and a <strong><em>centred</em></strong> community. A bounded community enforces membership via a set of constraints, rules of membership. Scrum is a good example of this.

Whatever the original intentions of the founders of scrum, what we see now is many forms of scrum, with a distinct feeling of <em>other</em> when you stray outside the prescribed practices. These act as a constraint on what is accepted as Scrum, and what it not.

A <em>centred community</em>, on the other hand, has no real constraints on behaviour, no real prescriptions on what it means to be part of it. Instead, there are some <em><strong>guiding principles</strong></em> that form the centre of the community ethos. Members will self identify to a large extent, and be accepted for the reason that they share the core principles. Behaviour Driven Design is held up as a good example of this style, as it has no real definition of itself, yet it certainly exists.

Today, based on our definition of the Microservices Architecture as fundamentally aspirational and the community that has formed around it, <strong>Microservices is a <i>centred</i> community</strong>. There is no strong definition of what it is, and yet it evidently exists and is having a tremendous impact.

This has many advantages! The technology stacks we can investigate are rich and varied. The processes are open to question and change. The integrations, models and designs are able to be researched and improved as needed.

My fear is that, due to the desire of many to try to pin down exactly what a <em>Microservice Design</em> is, they will, without understanding what they are doing, <em>turn it into a bounded community</em>, fixated on rules and stiffled with specifications.

Ultimately, this is what I see happened with SOA, WS-* was added in ever greater detail, and is a large reason why standards based SOA failed to gain wider adoption than it ultimately did.
<h2>Welcome to the new world, looks like the old world...</h2>
Microservices is undergoing a hype cycle, this is certainly true, yet that does not mean that it describes something that has no value. When coupled with the tremendous innovation happening in the infrastructure space, we are entering a special time.

The key is to realise that we need to take what we have already learned, the battle tested software design wisdom from the past decades and apply it once again in the context of a new philosophy based on ever stronger isolation mechanisms.

Only then will we be able to reap the benefits and live up to the aspirations we are harbouring that site at the core of the Microservices architecture.

&nbsp;

<hr />

&nbsp;

Simplicity Itself are researching better ways of building Microservices. By applying DDD, Event Sourcing and other techniques, we are building platforms that are naturally multi cloud and infrastructure agnostic and give a great User eXperience for Microservices, whether you are a developer, manager or operations.

We will be releasing this technology platform as open source within the next few months. If you would like more information or to be part of the beta programme <a href="/contact" target="_blank">contact us</a>