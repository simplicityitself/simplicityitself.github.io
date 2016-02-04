---
title: Development by Slogan with DRY&#58; Part 2, The Tower of Coupling
layout: article
author: Simplicity Itself Team
categories: our-team
redirect_from: "/our-team/development-by-slogan-dry-part2.html"
---
<strong><a title="Development by Slogan:Part 1, Really DRY" href="/our-team/development-by-slogan-dry-part1/">Part 1</a></strong>
<h3>Don't Repeat Anything == The Tower of Coupling</h3>
Copy and Paste, it's bad. We have this drilled into us as received knowledge. We must build abstractions to avoid copying code, or concepts that seem similar, at all costs. We must do this, or we are bad developers and we've built a WET (Write Everything Twice .. etc) system, which isn't DRY, so it's bad.

I did a <a href="https://skillsmatter.com/skillscasts/4278-development-in-the-large-musings-on-maintaining-a-healthy-codebase-over-the-years" target="_blank">fun little talk</a> a while ago that touched on this (seriously, go and do something a little silly every so often, it's fun), and pointed to the problem that is inherent in applying DRY too broadly; Coupling.

Each layer of abstraction that you add into your code is to take two (or more) things that are similar and put the same face on them. Each time you do this, however, it creates a connection between those components via the abstraction layer. Every time you need to alter the abstraction layer due to a change in one of the items, the underlying components will also have to be changed to reflect the new form of the abstraction.

This means that ripples of change will propagate between the two components that are not naturally linked, apart from the abstractions above them. This is coupling-by-abstraction and so we've discovered is the primary cost of adding abstractions. I'm <strong>not</strong> commenting on whether abstractions are bad, or good, simply saying that when you abstract, you couple.   Adding abstractions is far from free and by hiding things behind abstractions it actually works to constrain some of your future options.

Whether the benefit of applying DRY/ code abstraction is worth it is very much <em>context specific</em>, but I've found it to be far, far less valuable than is assumed. The cost of maintaining the tower abstractions tends to be high in applications with either high code churn, high developer churn or systems that are just very large.
<h4><strong>High code churn</strong></h4>
In systems with high levels of code churn, the ripple effect I mentioned above is in evidence all the time. A change in one place requires a change in another, all due to the overarching abstractions. Generally, we see systems like this become known as either 'over-engineered', 'big ball of mud' or 'spaghetti code'. Those three seems contradictory, but all those labels are due to the execution being routed via too many code convoluted paths such that developers get lost when visually parsing it through, in order to orient themselves. Whenever this is happening, developers will start asking for a 'refactor sprint', 'paying down technical debt' or the like. This is rooted in the abstractions that are in place not matching the current reality.

Unfortunately, changing the abstractions to match today will mean that they won't match reality 6 months from now. This dragging along a dead weight of abstractions is the eponymous 'Elephant in the Standup' that our Chief Scientist, Russ Miles, <a href="https://skillsmatter.com/skillscasts/5190-russ-miles" target="_blank">tells the story</a> of so well.
<h4>High developer churn</h4>
When devs are moving on and off a project frequently, the cost of the list knowledge and bringing new people up to speed becomes essential. At a certain point, this becomes one of the primary forces on your system and so you should optimise your architecture, designs and code to allow developers to orient themselves easily. You may think that applying DRY will help with that, but that isn't what I've found to be generally applicable. Human brains are primarily optimised for pattern matching, either visual, aural or conceptual. The first and last items is the thing we need to optimise for. You can alter your code to show developers 'hooks' or 'placemarkers' that allow them to understand quickly what code is doing without digging into anything. This doesn't need to be by implementing an abstraction (although it certainly could be), and DRY can help here, but it must be seen as your servant, and not the only way to achieve the required result.

Humans are spectacularly bad at organisation, we can hold a maximum of 5-7 things in working memory at once. Having a 'single place to look' is helpful, but nowhere near the panacea that it is sometimes described as.

All that is needed is something, anything, to be enough to give a new developer the feeling of <em>'aha, I know what this must be doing'</em>, and give that to them as quickly as possible.  Pattern matching is by far the most powerful tool you can use here, whether that is repeating patterns in a package structure, naming conventions or the like.
<h3>Large System</h3>
The forces in evidence in very large systems, in our experience, are that large sections of the codebase are fairly stable in terms of the features that they implement. The use cases are fulfilled, the integrations are implemented, the primary development teams are off doing something totally different now, and the system hums along. It makes money, at what point do we call this legacy?

My position is this - <em>"an application is Legacy when it becomes hard to change".</em>

This can be for many reasons; insufficient test coverage, no domain knowledge, a terrifying build process, resistance from Ops.  Anything really can contribute to the feeling, but it is a feeling nonetheless, and once it takes hold, it's very hard to shake off.

Unfortunately, building a tower of abstraction (to help avoid this!) can actually make this come about faster. As I mentioned above, abstractions tend to age fairly badly. We've all seen code that we look at and go 'eww, so old!', often when it's written in exactly the same language we are proposing to replace it with. What we are reacting to is the abstractions, the frameworks. Each of those issues I've found is unfortunately encouraged by attempting to implement DRY, and so your system will age with them and so become legacy. The deeper the abstractions, the more space there is for this to happen.

Once those abstractions are in place in a larger system, the same rule as above tends to be in effect, changing one component 3 years later requires changing the abstraction which requires changing 45 other components. At that point developers start screaming "rewrite!", and as if by magic, you have a legacy system on the books.

To abuse the old proverb - <em>"the road to legacy is paved with good developer practices"</em>
<strong>Next post ... </strong><a title="Development by Slogan with DRY: Part 3, DRY vs WET" href="/our-team/development-by-slogan-dry-part3/"><em>Development by Slogan with DRY, Part 3: DRY vs WET?</em></a>

<hr />

<strong>Simplicity Itself 'The Knowledge'</strong>

We release our blogs and articles to our mailing lists a day or so before making them public.  Sign up for 'The Knowledge' from Simplicity Itself for advance access and extra content!
