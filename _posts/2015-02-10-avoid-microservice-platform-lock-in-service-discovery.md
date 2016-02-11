---
layout: post
author: David Dawson
categories:
 - Microservices and Reactive
title: Avoid Microservice Platform Lock In using Service Discovery
date: 2015-02-10 22:52:00
image: images/vis/padlock.jpg
tags:
 - antifragile
 - microservice
 - service discovery

redirect_from: "/microservices-reactive/avoid-microservice-platform-lock-in-service-discovery.html"
---
The promises of adopting the cloud for your software are enticing. Effectively limitless scalability, large reductions in capital expenditure, efficiency savings in staffing through automation. An exciting prospective, and one that has being brought into even greater focus by the rise and rise of Microservices.

Not all is sweetness and light, however. There is significant investment required in ensuring your organisation and software can make best use of the new environment of the cloud. That investment in technology, training, development approaches and aligning the business with the new adaptable technology world can be significant, and the potential for a misstep to cost and lead your organisation into a dead end is present and you are right to be wary.

One question that we are asked during our consultancy and project oversight engagements is <em><strong>"which deployment platform should we use?"</strong></em>

<a title="Microservice Deployment Overview" href="/learning/getting-started-microservices/microservice-deployment-overview/">This is far more complex than initially appears</a>. You could use IaaS style bare virtual machines, and build your own management infrastructure. Or, you could use one of the PaaS products and accept the restrictions they impose. New on the block are the the container management solutions, taking Docker and friends and bonding them into a more cohesive, manageable solution.

I could give examples of all of these different types of system that are good products and good solutions. They are very different from each other in the way they work and in the way they require your organisation to work with them. This speaks to one of the issues of the cloud, it is far from a single technology set or even a cohesive set of ideas.

Which then, do you choose? How can you begin to evaluate which is going to be the best fit for your needs?  This is not easy as you have to balance the differing capabilities of the platform against your applications, decide which applications are going to have to run sub-optimally, which need to be rewritten, which need to be abandoned.

This difficulty of this choice is telling you something.  It is telling that you are attempting to pick a single solution, a single platform to rule them all. It will take your applications, manage them, secure them, keep the cosseted and safe. In return, you will embed that platform into the heart of your organisation and it will become virtually impossible to remove it.
<h3>The New Mainframe</h3>
This cloud platform lock-in is unexpected. No vendor will tell you that this is the direction you are heading, and yet by attempting to evaluate and choose a single platform, you are heading for lock in and limitation.

Now, that lock in may be a good solution for your business, and it may not be. Take Netflix, they currently run exclusively on Amazon Web Services. They have built all of their internal tooling and processes around this platform and are effectively attached to it. The reason they did this is because it was worth trading the ability to move for the ability to focus more deeply on a single target. This works because the IaaS market is in a period of intense price and feature competition between large organisations with deep pockets (ie, Google, Microsoft). We can expect this to be the case for some time.

Thus, there is little risk to Netflix that they will be trapped by a future AWS that has an abusive monopoly position.

The same decision presents when evaluating the new Platforms, whether that is Cloud Foundry, Kubernetes, Openshift, CoreOS, Mesosphere or others. They are constructed to provide ease of use and a layer of control and management. You must cede that control to them so that they in turn provide their promised utility.

Are you willing to make that trade?
<h3>Build in Antifragility, Retain the Ability to Act</h3>
An interesting observation on the Netflix technology stack. The engineers and architects at Netflix are obviously very intelligent, and from what we see of their publicly released software they have not fully wedded themselves to AWS in the way that it first appears and that I alluded to above.

They have retained their ability to act, their ability to move by choosing to ignore certain AWS technologies. They may, or may not, have consciously done this, but by applying the architectural principles they call <em>Cloud Native</em> they force their systems in a certain shape that values change and movement.

The ones I'm looking at in particular at are <a title="Service Discovery Overview" href="/learning/getting-started-microservices/service-discovery-overview/#eureka" target="_blank">Eureka</a> and <a href="/learning/getting-started-microservices/service-discovery-overview/#zookeeper" target="_blank">Curator</a>.  These implement a system known as <em><a title="Service Discovery Overview" href="/learning/getting-started-microservices/service-discovery-overview/" target="_blank">Service Discovery</a>. </em>These enable the various pieces of the Netflix infrastructure to find each other at runtime, so allowing those pieces to move around as needed.

By retaining full control of this aspect of their architecture, Netflix have given themselves the option of moving sections of their infrastructure off of the AWS stack.  Realising this option will take some effort, of course, but it has been retained.

A key tenet of <a title="Antifragility Webinars: Practice Beyond the Rhetoric!" href="/antifragile/webinars/" target="_blank">Antifragility (webinar series)</a> is the creation of multiple options for the future. This <em>optionality</em> allows you to take positive actions in response to change.

Maintaining control of your overall Service Discovery function delivers options for you and sets you up to be able to improve in response to change. Ceding this function to any platform in it's entirety will destroy those options and you will have just bought yourself a new Mainframe, a new system at the heart of your organisation.

With retained control, you do not have to choose between platforms in a strategic sense. You can implement several, including custom ones and use your overall service discovery system to permit services to locate each other between the platforms.

This does come with the cost of building and maintaining that aspect of your infrastructure, which the various platforms also provide a greater or lesser capability in. This then is the trade you must make and the cost of making it. In order to retain your ability to act in the future, you pay now by keeping control of your service discovery infrastructure.

This is the approach we use in Simplicity Itself. For our own systems and those we have built for our clients we are currently running services that span Kubernetes, Cloud Foundry and managed IaaS using Netflix Asgard on AWS. We expect to add another platform in the next 6 months, and potentially retire one of the ones we have once our research metrics are fully collected. Our evaluations of the various platforms will be in our private <a title="Expert Learning: The Knowledge" href="/learning/the-knowledge/" target="_blank">Knowledge</a> subscription over the next few months.

Each has been chosen for the particular technical benefits that it gives, without the need for any strategic commitment to any of the platforms, as we have retained the ability to de-prioritise and remove it as we deem it necessary. The services hosted with them are able to locate each other (with some extra setup in the kubernetes infrastructure) via our service discovery setup.

In this way, your platform evaluation and final decision is reduced to a tactical and technical one, based on on what you need <em>right now. </em>There is no need to try to predict what your needs will be going forward.

The future can be left safely in the hands of the options you have just generated, and you can rest in the knowledge that <em>when you need to act, you can</em>.