---
title: Supercharged HTTP-based Microservice Testing with Betamax
layout: article
author: Russ Miles
categories: latest-news
redirect_from: "/public/latest-news/supercharged-testing-with-betamax.html"
---
<em>Yawn</em>... That pretty much sums up doing functional testing for microservices where you're pulling data feeds from an external system.

No matter how fast you'd like things to go, you're at the mercy of network latency and the responsiveness of the source system to get you enough data to feed into your microservices pipeline to give you the confidence that it works properly.

If you find your own life dwindling away as you run <em>YAFT</em> (yet another functional test) against an HTTP external source, you're not alone.

This problem is not going away as microservice pipelines provide functional composition in support of mashing up data from disparate sources.

So what can be done to quite literally save your life in these situations? On the one hand there's a nice timeslot for coffee, a short chat and possibly a hike across the Sahara (including pre-training time).

On the other hand, if you want to beat the delay there's <a href="http://freeside.co/betamax/"><em>Betamax</em></a>.
<h2>A (Brief) Introduction to Betamax</h2>
Betamax is a really simple system for recording HTTP interactions and then playing them back, usually in testing scenarios.

Adopting what is effectively a proxy man-in-the-middle position, Betamax records detected HTTP interactions to a <em>tape</em> as shown below:

<img src="/wp-content/uploads/2014/05/figure-1.jpg" alt="Betamax in context" />

The Betamax tape is a human-readable <a href="http://www.yaml.org">YAML</a> file that you can amend if you choose to do so. The main purpose of the tape is to then be automatically used in place of the full, and slow, interactions the next time the test is run.

<img src="/wp-content/uploads/2014/05/figure-2.jpg" alt="Betamax being used for replay" />
<h2>Challenge 1: Speed</h2>
I came to Betamax as someone who was running a long-winded test against an external chat-style system. My micro service's single-purpose was to retrieve 1-hour batches of conversations in the chat system, and ferrying that on to the next micro service in the chain for further processing.
<blockquote><em>NOTE:</em> This blog is about a real 'live' system that Simplicity Itself are working on so I've had to remove the names to protect the <em>innocent</em>.</blockquote>
My micro service is built using <a href="http://projects.spring.io/spring-boot/">Spring Boot</a>, mainly because ideally the project is eventually handed over to the client's own Groovy language and Spring-framework-centric development teams. The main purpose of the project is to provide the required functionality, the secondary goal being to demonstrate <a href="https://leanpub.com/antifragilesoftware">microservices and an antifragile software system</a>.

Ok, first let's take a look at the test before introducing Betamax. This test's aim was to prove that a few hours of posts, numbering roughly several thousands of posts, could be effectively slurped into the pipeline in nicely bounded hour chunks. For this testing, I used (as I often do when working with Java) the excellent <a href="https://code.google.com/p/spock/">Spock framework</a>:
<pre><code>class HourBatchChatImportServiceIntegrationSpec extends BaseLocalEnvironmentSpec {

    def "import and process chatter feed items correctly"() {

        given:
        def hourBatchChatImportPipeline = applicationContext.getBean(HourBatchChatImportService)
        def calculateDateTimeRange = applicationContext.getBean(CalculateDateTimeRange)

        def from = "2014-05-22-1"
        def to = "2014-05-22-5"
        def (start, end) = calculateDateTimeRange.getStartEnd(from, to)

        when:
        def response = hourBatchChatImportService.call(start, end)

        then:
        response != null
    }
}
</code></pre>
The test grabs the hourBatchChatImportService, calculates a date range for the posts to be imported (in this case from 22nd May at 1am to 22nd May at 5am inclusive) and then kicks off the pipeline passing in those start and end date range parameters.

I'm also using a <code>BaseLocalEnvironmentSpec</code> to set up the Spring application context, switching on a 'local' profile that selects downstream microservices running on my local testing machine (rather than resolving them to full services as happens at runtime). The contents of the <code>BaseLocalEnvironmentSpec</code> is shown below:
<pre><code>abstract class BaseLocalEnvironmentSpec extends Specification {

    def static applicationContext;

    def setupSpec() {
        applicationContext = new AnnotationConfigApplicationContext()
        applicationContext.getEnvironment().setActiveProfiles("local", "test");
        applicationContext.register(ChatHooverController);
        applicationContext.refresh()
    }
}
</code></pre>
<blockquote>The tests shown here are using Spock but there is also support for JUnit within Betamax. We'll focus on using Spock for this blog as the tests are much simpler, clearer and therefore more readable and comprehendible.</blockquote>
The problem was, when running this test things took a <em>long</em> time. Fair longer than anyone was going to be willing to wait and so the test was in serious danger of being one that was rarely run.

I was willing to suck up that time once ,or maybe even twice, but <em>every time</em> the test is run? No way.

Enter Betamax, stage left.
<h2>Introducing Betamax to the Chat Service's Testing</h2>
Taking a peek at the 'Getting Started' information on the Betamax homepage, things looked fairly straightforward to get started. First I introduced the Betamax dependencies to my default Spring Boot Gradle build file, <code>build.gradle</code>:
<pre><code>testCompile 'co.freeside:betamax:1.1.2'
</code></pre>
With the dependencies in place, I could then add the markers to my Spock test to state that I wanted to use Betamax to record the HTTP interactions caused by my service importing chat posts.
<pre><code>...

@Rule Recorder recorder = new Recorder()

@Betamax(tape = 'chatter-import')
def "import and process chatter feed items correctly"() {

...
</code></pre>
The JUnit @Rule <code>recorder</code> plugs in the Betamax runtime to the Spock runtime for this test. Then the <code>@Betamax</code> annotation simply specifies that a tape called <code>chatter-import</code> should be used to record the underlying HTTP interactions.

Under the skin of my service I am using <a href="http://groovy.codehaus.org/HTTP+Builder">Groovy's <code>HTTPBuilder</code> </a>to connect to the chat posts source. Betamax uses a proxy approach to wrap and record interactions with HTTP clients and has native support for when you're using <code>HTTPBuilder</code>.

All I needed to do was configure the HTTPBuilder that was used by my underlying service's code to apply the Betamax proxy configuration to it, and to do this I created a new configuration using Spring's JavaConfig:
<pre><code>@Configuration
@Profile('test')
class RecordingJSONServicesConfiguration {

    @Bean
    HTTPBuilder httpBuilder() {
        def builder = new HTTPBuilder()
        BetamaxRoutePlanner.configure(builder.client)
        builder
    }
}
</code></pre>
I then added this new configuration to my local test configuration in the <code>BaseLocalEnvironmentSpec</code> by registering the new <code>RecordingJSONServicesConfiguration</code>:
<pre><code>abstract class BaseLocalEnvironmentSpec extends Specification {

    def static applicationContext;

    def setupSpec() {
        applicationContext = new AnnotationConfigApplicationContext()
        applicationContext.getEnvironment().setActiveProfiles("local", "test")
        applicationContext.register(ChatHooverController)
        applicationContext.register(RecordingJSONServicesConfiguration)
        applicationContext.refresh()
    }
}
</code></pre>
That should be all that was needed but then disaster struck. I got all sorts of certificate problems when I tried to run my tests. Something was unhappy; <em>VERY</em> unhappy; something was convinced I was running a man-in-the-middle attack on my own system.

Which of course is actually sort-of true.

Disaster had struck the shape of the dreaded <em>HTTPS</em>, and I was stuck.
<h2>Challenge 2: HTTPS</h2>
Luckily, <a href="http://freeside.co/betamax/#https">Betamax supports using HTTPS</a> such that it can operate as a complete record and pass-through of the credentials from the original connection establishment point. After an hour or so of light sweating I found a configuration that worked.

It turned out that all I needed to do was enable HTTPS support on my <code>HTTPBuilder</code>'s client and I was good to go. My complete <code>RecordingJSONServicesConfiguration</code> ended up looking like the following:
<pre><code>@Configuration
@Profile('test')
class RecordingJSONServicesConfiguration {

    @Bean
    HTTPBuilder httpBuilder() {
        def builder = new HTTPBuilder()
        BetamaxRoutePlanner.configure(builder.client)
        BetamaxHttpsSupport.configure(builder.client);
        builder
    }
}
</code></pre>
Now when I ran the test, the first time through it would hit the source system and <em>slowly</em> drag over the 5 hours of posts. At the end of the run a complete tape of those requests was recorded by default, to my <code>resources/betamax/tapes/chatter-import.yaml</code> file.

Next time I ran the test I didn't even have time to get up out of my chair. The tape was read and run through my service's functionality quicker than you can say <em>antifragile microservices</em>.
<h2>A last word on Java versions</h2>
Ok, so there was one little problem that I've skimmed over. Originally I was using Java 8 and I had all sorts of odd problems with major and minor versions of class files, not to mention issues saving my tapes. A quick switch back to using Java 7, which to be fair is the recommended Java version of Betamax, and everything cleaned itself up.

I just mentioned this to save you some headaches just in case you're also fond of the bleeding edge, technology-wise.
<h2>Remember &amp; Apply</h2>
Betamax is a wonderful tool for speeding up slow functional testing on microservices where you're perhaps pulling or pushing service-invocation data around using HTTP and you don't want to use slow source services every time. Using Betamax I got all the confidence of using <em>real</em> data, with none of the performance penalty of hitting the actual system.

Of course, if the actual source changes you'll need to delete and re-record your tapes, but that's a one-time hit at that point only.
<h2>Want Further Information?</h2>
This blog has been a taster of developing a microservice that is invoked as part of a primarily HTTP-based pipeline. If you're interested in developing systems based on microservices, particularly taking advantage of the <a href="http://www.infoq.com/articles/russ-miles-antifragility-microservices">antifragile properties</a> that can be exhibited from such an architecture, then checking lout the following book and courses might be helpful:
<ul>
	<li><a href="https://leanpub.com/antifragilesoftware">Antifragile Software: Building Adaptable Software with Microservices</a> book.</li>
	<li><a href="/training/course/building_adaptable_software/">Building Antifragile Software with Microservices</a> course.</li>
</ul>