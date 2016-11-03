---
title: A Microservices Developer API using .... Make
layout: article
author: David Dawson
date: 2016-11-03 11:00
image: images/vis/clouds1.jpg
categories:
 - Our Team
tags:
 - cloudnative
 - continuousdelivery
 - microservices
 - make

---

Gradle, NPM, Lein, Maven, Docker, Ansible, Kubernetes, Grunt ... The list goes on (and on, and on). Developer tooling, constantly re-invented for the modern age.

We recently reviewed the various tooling we were using on a project, and came up with a long list. All of which a developer needs
to be able to develop effectively.

Any new joiner would write a cheat sheet out. Just like the one in the wiki, that no one maintains properly.

So when you come to a part of the project you've not worked with on a while, you want to get that initial hook, the starting place to cosntruct the 'Theory', the mental model of the system that you use to understand what you see in the repo.

Where do you start?  First you have to figure out what the entry point is, for tests, runtime. Is there one?  What's the build tool?

What if there's more than one?

Sound familiar?

## Enter Make, the Once and Future Dev Tool

For all of our projects, we now use make as the top level developer tooling. Every project is driven from a Makefile.
Internally, this delegates to the tooling we know and love. So, for a java project, Gradle, for Clojure, Leiningen and so on.

This allows us to encode the coarse things a developer needs to do in a file that is checked in with the project.

Ever had to go digging into a CI server for how it actually does a release using Gradle?

For our projects that's as simple as looking in the Makefile for what the `release` target is.

This helps from a vocabulary point of view, you decide your top level tasks, likely `test`, `build`, `release`, `clean` and put those in every Makefile.

Then, any developer can go to any project, do quick verifications and then use the other make targets to start understanding more of the details.

You can see an example of this in [This Project](https://github.com/muoncore/muon-intro-talk)

So, I'm not proposing to replace your developer tooling. I'm saying your toolbox is incomplete. You need to use Make around them all,
give them consistency and an ease of use.

## It Tab Completes

Did I mention make ships with bash tab autocomplete on most platforms. Can your dev tool do that?
