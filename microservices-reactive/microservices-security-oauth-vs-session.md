---
layout: article
author: David Dawson
categories: Microservices and Reactive
title: Microservices Security&#58; OAuth vs Session
redirect_from: "/microservices-reactive/microservices-security-oauth-vs-session.html"
---

A question often posed to us during our research and project work is "<em>how should I secure a Microservice?</em>"

This is a far more complex question than it first appears, covering infrastructure, network security, transport level security, inter-service authentication and authorisation, data locality and access control and finally the authentication and authorisation of individual user requests.

Putting these points aside for the time being, what is often meant is how to externally secure an API that is backed by a Microservice. Or, as I was recently asked, why is everyone talking about OAuth, isn't session based security simpler?

Session security is what everyone already knows, a client sends authentication information to a service, which then generates a server side session that contains that identity for later use.

When put against an OAuth authentication flow, the quick answer is yes, it certainly is simpler to use sessions.

They are, however, solving different sets of issues. There is some overlap, but the two types are by no means equivalent, and I think that this difference in scope is what brings the question up.

You can use sessions, absolutely, to solve endpoint security, but they are actually solving the problem of maintaining a long running stateful conversation between client and server. That long running conversation can be used for authentication by storing the auth token server side. This gives you greater flexibility, but the drawback is that you can't subsequently recreate the authenticated state just from what the client has, the API owns the relationship. You can see this through the need to replicate sessions on the server side, essentially sharing that ownership to grant higher availability.

OAuth/ token based security solves the problem differently, by dealing with a strictly limited subset of 'long running conversation'. They permit a system to say "this client is who it claims to be" by creating a trust relationship via the token provider. So in this case, the token provider (eg OAuth) owns the relationship. The upshot of this approach is that you can recreate the authenticated state from just what the client possesses, the token. That ability to recreate the relationship means you can distribute that authenticated state recreation arbitrarily.

This isn't possible with a session based approach, and is the primary difference, to my mind between the two approaches. If you don't need to distribute authentication (and I don't mean a session store, I mean pass it through different contexts in your back end services), then session based is superior due to it's simpler construction. If you do need to distribute authentication, then token based is better as it permits this to happen as a natural consequence of the design.

In future blogs we will investigate concretely how this can be used to create deeper, multi level security in a Microservices system, and what it looks like in code.