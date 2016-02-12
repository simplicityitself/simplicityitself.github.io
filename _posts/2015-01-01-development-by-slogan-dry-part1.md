---
title: Development by Slogan with DRY&#58; Part 1, Really DRY
layout: post
author: David Dawson
date: 2015-01-01
image: images/vis/dry-cracked-skin.jpg
categories:
 - Our Team
tags:
 - architecture
 - bounded context
 - data flow
 - dogma
 - DRY
 - life preserver
 - microservices
 - WET

redirect_from: "/our-team/development-by-slogan-dry-part1.html"
---
I recently had a thought provoking exchange on Twitter with Luke Daley who is a Gradle developer, creator of the Ratpack web framework and all around awesome fellow.

We were briefly discussing DRY, aka Don't Repeat Yourself, that great maxim of modern software development. My opening gambit was that 'DRY totally sucks' (because well, Twitter..). Luke picked me up on this, asking for a more nuanced view, more depth. His entirely reasonable request, to not 'propagate software development by slogan', which I've unashamedly stolen as my title is one we should all pay attention to.

In this case, I have truly come to believe that DRY is actually one of those slogans. It is a remarkably simple idea, with a pithy catch phrase, and it has become part of the wisdom of the developer, ranked along with TDD, design patterns and Continuous Integration as 'the fundamentals'.

DRY seems so self explanatory, so deeply meaningful, so universally applicable, why, oh why would you do anything other than follow this seemingly elementary rule of development?
<h3>Don't Repeat Anything</h3>
In todays world, you may be criticised for writing similar looking functions, similar looking data structures, configuration files and even resource handling. The similarities are endless and so are the great towers of abstraction that can be built on top of that similarity. Each abstraction layer seeking to take 'similar' and to hide the difference in order to create 'same'.

I feel that DRY has become somewhat debased over the years, and like the well known childrens whispering game, we have ended up with "Copy and Paste is BAAAD!" as the underlying understanding of DRY. As this section's title alludes, Don’t Repeat Anything has almost become synonymous with DRY and that has a very real cost.
<h3>Step forward the real DRY</h3>
You can actually see the roots on the <a href="http://en.wikipedia.org/wiki/Don't_repeat_yourself">DRY Wikipedia article</a>. To my knowledge, DRY was first discussed in "The Pragmatic Programmer" (a highly recommended book). The definitive phrase that people take from it seems to be :

<code>"Every piece of knowledge must have a single, unambiguous, authoritative representation within a system."</code>

Fascinating, right?

The key term here is 'knowledge'. No mention of copy and paste here, we are talking concepts, not characters.

The <em>Pragmatic Programmer</em>, and the ideas within it are a product of the time it was written. This was when Enterprise Software (EJB ftw!) was approaching the apex of it's first hype cycle, and the full horror of xml versus code versus programmer was being realised.

It was a testing time for everyone involved.  I came into the industry just after this, and saw failing projects, unmaintainable systems and everyone playing "hunt the config file". Amusing, until it was your turn.  DRY came as a breath of fresh air, that we shouldn't need to put things in 10 different files, keep user information smeared around the system, have a customer order in 5 different storage formats. There was a better way, and it's name was DRY.

This set of ideas slowly morphed into 'model driven development', which underpins many development frameworks and approaches today, such as Rails, Grails, Play and the like. They all attempt to implement the phrase above, creating a single, authoritative representation of pieces of knowledge.

The "Entity" was born, refined, and then became the core of how we build rationalise about, and then build, systems over the past 10ish years.

Unfortunately, this comes with it's own problems. Before I discuss those though, I want to tackle Don't Repeat Anything a little more, as it's the application of this too deeply that we see again and again, and defended to the point of dogma.

<strong>Next post ... </strong>I'll dig into the effects this can have on your development in <a title="Development by Slogan with DRY: Part 2, The Tower of Coupling" href="/our-team/development-by-slogan-dry-part2/"><em>Development by Slogan with DRY, Part 2: The Tower of Coupling</em></a>

<hr />

<strong>Simplicity Itself 'The Knowledge'</strong>

We release our blogs and articles to our mailing lists a day or so before making them public.  Sign up for 'The Knowledge' from Simplicity Itself for advance access and extra content!