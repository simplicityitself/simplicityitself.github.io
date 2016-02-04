---
layout: article
author: David Dawson
categories: Microservices and Reactive
title: Best Practice Developer techniques&#58; The Hunt for The Silver Bullet
redirect_from: "/learning/adaptive/the-real-silver-bullet.html"
---

Over the past 15 years of software development, especially since the XP movement gained traction, a series of styles, techniques and processes have gained broad industry adoption. These are, at times, called 'best practices'. At others times they are referred to as dogma or 'cargo cult'.

This article describes some (!) of these techniques, presents some overarching ideas that connect them all, and finally a method through which you can objectively evaluate them, rather than relying on opinion or hyperbole.
<h2>The Contenders</h2>
<h3>Code Review</h3>
Code review describes a process of one developer reading through the code created by another and giving feedback. How deep that reading is and what happens with the feedback is variable.

Some teams enforce a review being 'passed', or the code being formally approved and signed off by the reviewer, others that treat review as more of a learning tool, and so feedback is more advisory than prescriptive.

This variation is something to be aware of, the term by no means has the same definition across the industry, and the intent behind applying it varies.
<h3>Pair Programming</h3>
This describes the practice of two developers working on the same task, on the same machine. The method varies, some promote multiple input devices, others a driver/ navigator approach.

The premise here on why this is useful changes depending on who you ask. It can be the source of much angst, with proponents taking quite different positions, and in certain cases teams becoming divided deeply by the practice.

Some say that it helps keep code clean, others that it aids knowledge transfer,

Some teams use it exclusively, going as far as to have less machines than people, others use it tactically, and some not at all.

My opinion is that all of these positions hold true to a greater or lesser extent, the rub being that this completely depends on the context and participants.
<h3>Tests as Documentation</h3>
This if often expressed as a benefit of Test Driven Development. The underlying premise is that applying TDD is a good way to begin reasoning about the system you are constructing.

Given that, the assertion is that your tests will form usable documentation.

My experience is that this is not a given, and for this to become the case, you need to explicitly make that real during writing your tests.

Slightly off topic, my personal rule of thumb is to ensure you delete at least half your tests once your primary development is complete, with that half being the 'research' style tests.

The ones that are left are the ones that you have cleaned up into usable regression tests and also, documentation.
<h3>Clean Code</h3>
Clean Code is the title of a book by Robert C. Martin. In it, a conceptual framework is built up and demonstrated, with examples in Java, on the subject of 'cleanliness' in writing code.

This is an excellent book, and I recommend you read it.

The main expected effects of applying the styling and ideas presented are improved readability and verifiable simplicity in the code being cleaned.

There is something of a bias towards object oriented (especially Java) coding styles and patterns, but many of the ideas are readily transferable to other paradigms.
<h3>The Complex Effects of a Complex subject</h3>
Adopting each of these creates a complex effect. By that I mean that they, in isolation or together, do not have a single (or simple) effect that can be identified.

This leads to a variety of points of view on the subjects and much of the discussion around them falls into the realm of 'begging the question'. This is a rhetorical device meaning that they should be assumed to be correct, and not open to debate on their fundamental worth. This is a deeply foolish position to take, dogmatic at best and dangerously misguiding at worst.

This is not to say that I believe any of these ideas are fundamentally flawed, I don't.

The point here is that we owe it to ourselves to ensure that everything is open to question, open to critique, open to analysis, or we are promoting code based religion.
<h2>What it all means</h2>
The real question is, as always, why?

There are two ways of valuing something, based on it's intrinsic or it's extrinsic value. The value that is inherent within it, or the value that it creates in it's environment.

A technique such as this must be valued based on it's extrinsic value, the effect that it creates in the environment.

So why adopt any of the above techniques at all, what benefit are you expecting to get, what effect are you expecting to be created?

The effects, complex though they are can be picked apart and analysed for their worth, but you need some way of identifying the value they bring in your environment.

For me, and Simplicity Itself, the question often revolves around the learning process. This is a fundamental part of software development. As Russ Miles, our Chief Scientist, is fond of saying,
<blockquote><em>"We do Research and Development, we often start out not knowing what we are going to end up with" - <strong>Russ Miles</strong></em></blockquote>
It is even more fundamental than this. Moving between codebases, coming back after a holiday, getting up to date with a new version of a tool or technique. This is all learning.

Learning takes time. <em>It cannot be rushed.</em>

Following an intensive learning session, you will see a <a title="Rationale for Adaptive Learning" href="http://www.simplicityitself.com/learning/rationale-for-adaptive-learning/" target="_blank">drop of of around 50-80%</a> of what you learned over the subsequent weeks., depending how often you use it. With that, you must continue the learning process over months to fully absorb a subject.
<h2>Programming as Theory Building</h2>

Peter Naur is a deep thinker, who has been active in the world of software over decades. He is the N in BNF, a language used to formally describe computer language grammars and has made many other contributions to the field that affect the way we work.

In 1985, he wrote an article, "Programming as Theory Building". This uses the terminology of the time (eg, Structure Programming), but the subject it approaches is timeless.

The premise is this, the code you write is not the system. The documentation is not the system, neither is the deployment environment, tests or other artifacts.

All of these are the concrete outworkings of the real thing, which he refers to as 'The Theory'. This Theory is the real system, and it is the tacit knowledge, the deep understanding of all of the above, the various corner cases, the coding standards, performance issues, functional requirements, language preferences, development team interpersonal conflict. The whole gamut.

Only when this coherent strand of thought, encompassing all of the above, is fully understood by a developer can they make changes fully in tune with the theory. If they don't have a full understanding, they will unconsciously work against the grain of the system and quickly run into trouble. So the primary goal of programmers shouldn't be to churn code, it's building their understanding of the theories weaving their way around them.

Transferring these theories is hard and deeply context specific. Since it is not only the code, self documenting code can only go so far. Pair programming can help, but it takes time and isn't repeatable or able to be reviewed later ("what did he say about that again?"), clean code helps, but won't necessarily tell you much about the production environment.

When seen in the light of this very hard job of distributing the theory, the tacit understanding of the system all of the above can be seen as a potential solution to part of the problem, but they can never be the whole solution.

Thus, I would put it to anyone holding a more dogmatic position (sometimes expressed as "X is the basis of all that we do"), unless your chosen technique solves this problem entirely, you are misguided in your belief.

I recommend you fully read the article and absorb before continuing. You can do so <a title="Programming as Theory Building" href="http://alistair.cockburn.us/ASD+book+extract%3A+%22Naur,+Ehn,+Musashi%22" target="_blank">here</a>
<h2>We don't have months!</h2>
It's often true, there simply isn't the time to spend months bringing someone up to speed on a system. They need to get productive, now.

The context, the Theory, is not something that can be ignored. Allowing a developer to operate effectively without gaining the full context in a system is a route to a productivity boost. It allows safer development to happen in organisations with higher staff turnover, or any with movement of developers across multiple systems.
Looping back to where we started then, these 'best practices', you will notice that they all focus around a few ideas. Readability, transfer of knowledge, building understanding. The promoters of these techniques sometimes fall into trying to describe them in terms of their essential qualities, how powerful they are in and of themselves, rather than the utility that they give. That's because, frankly, it's often hard to succinctly describe their utility.

They are all speaking to this same subject, what Peter Naur calls the Theory Building, and importantly, how to make that Theory Building as fast and accurate as possible.

This is a major part of the utility of all of the techniques, aiding Theory Building, which is why I chose these in particular.

So, one question you can now ask, how well do they fulfil this essential knowledge transfer function, passing along the Theory. This will vary between teams and contexts, and it's hard. Since it's so hard, and such a real and measurable cost, I would suggest that this becomes your primary measure of how useful these techniques and ideas are.

You can measure the transfer of the Theory. It's not always easy, but it's much easier to test for than the subjective measures (aka flame wars!) you will end up with otherwise.

My answer for this is that, there is no right answer. You must test, and measure. With those measurements in hand, you make an objective decision on the utility of the techniques.

Some measurements of these can take the form of :-
<ul>
	<li>Knowledge retention over time, on whatever subject you want to target.</li>
	<li>Mean time to push - how long it takes a new dev to make a prod change</li>
	<li>Orientation time - how long it takes a dev to start making changes to a codebase they switch onto.</li>
</ul>
Techniques that improve Theory Building will affect these metrics.
<h2>Microservices as a learning tool</h2>
This concept of aiding learning by reducing the system scope is one motivation behind the burgeoning Microservices movement. A component "small enough to fit in your head" is how it expressed.

Code with well enough defined contracts that you can pick it up and make many changes without reference to the full system. In terms of Theory Building, you have reduced the amount of the full Theory you have to absorb in order to be able to make changes that work within in sympathy with the overall grain of the system.

There are other benefits, of course, such as enabling <a title="Antifragile Software: Building Adaptable Software with Microservices" href="http://www.simplicityitself.com/publications/antifragile-software/" target="_blank">antifragile behaviour</a>, creating runtime granularity, thriving on change and so on.  Being able to make changes quickly, and also enabling the behaviours described makes <a title="How to Build Microservices" href="http://www.simplicityitself.com/learning/getting-started-microservices/how-to-build-microservices/" target="_blank">Microservices a very powerful tool</a>.
<h2>What next?</h2>
Now that you have a picture of the full context of learning, the tacit Theory of software, you are in a position to make objective decisions about the tools and techniques you use.

You can select any of the above, or others, and do so objectively. This is huge.

You don't need arguments between developer opinions. Simply run a test, gather metrics, make a decision.

This forms a key part of our <em>Adaptive Learning</em> engagements, extended training with a deep metrics driven approach that helps developers to learn new technologies and adopt techniques that improves their ability to learn and build systems that are sympathetic to learning.

If you'd like help with this and with learning in general, get in touch.

&nbsp;