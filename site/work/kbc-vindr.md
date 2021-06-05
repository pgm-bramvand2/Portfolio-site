---
tags: works
title: KBC Vindr
description: Assessing the UX of Argent's mobile app
image: kbc-vindr.png
imageAlt: A young woman holding a block of post-its and a marker
clientLogo: kbcvindr.svg
---

Entrepreneurship is great, but not always easy. To bring entrepreneurs closer together and let them be able to share experiences and insights in order to inspire each other, the Belgian bank and insurance company KBC launched its matchmaking tool KBC Vindr in 2019. The modest success and the attracted users of what was originally a marketing project showed that it had market potential, but the activation rate of acquired users was lower than expected.

KBC approached In The Pocket to examine the pain points of the value proposition and make the platform future-proof. Together with our dedicated and multidisciplinary team at KBC’s disposal, we managed to fulfil all their expectations. This is how we did it!


## The short story


Researching the value proposition of KBC Vindr
Pivoting it to a platform on which entrepreneurs can ask their questions to other entrepreneurs and network with their counterparts
Working in close collaboration with entrepreneurs who’ll use the platform so we could use their feedback
Developing a platform that is secure, reliable and maintainable
Shipping it in 3,5 months time
‍

> Thanks to the constructive guidance of In The Pocket, we were able to reinvent ourselves and create a new version of  KBC  Vindr that has even more added value for entrepreneurs. The interaction between the creative entrepreneurship of In The Pocket and the highly process-driven organization of KBC was an interesting and inspiring adventure for both parties.
>
> *Kurt De Ronghe, Head of policy advice SME at KBC*

‍
## The full story

Before we started building, we layed out the blueprints for the platform. Our strategists, product managers, product designers and architects started working in parallel on three different things:
### Value proposition & Product

We needed to understand the success of KBC Vindr’s current value proposition, but also the pains and the reasons why people didn’t always stay engaged with the previous platform. Based on all the interesting insights, analytics and documentation that KBC provided us, we’ve set up a user research guide and organised qualitative interviews with entrepreneurs to understand their underlying needs and frustrations. 

With those insights, we then entered into a strategic workshop, where we used our Value Proposition Canvas. By using this tool, we were able to map out the user’s most important jobs to be done, what goals they want to achieve and what problems they experience achieving them. This helped us to examine the existing features and see how they contributed to those goals, and what features didn’t.

Of course, it was important to also take KBC’s business objectives into account. KBC wanted to achieve product-market fit with this platform. To know when you achieve anything, you need clear objectives & key results to measure success, together with KBC we defined these clear metrics into a plant-the-flag session.

Based on all this input and after validating the concept with end-users, we decided together with KBC to pivot KBC Vindr to a platform on which entrepreneurs can ask their questions to other entrepreneurs. By bringing entrepreneurs closer together, they stimulate each other's challenges and make their business future-proof. Because an entrepreneur faces new challenges every day, its peers are best suited to share hands-on experiences. Maybe they even want to work together! KBC Vindr is a safe and trusted environment where they can ask questions that they cannot ask anywhere else - "How should I hire my first employee?", for example.

KBC mainly acts as facilitator and community manager. The bank is able to gather information concerning the topics that live among entrepreneurs. Based on this, they can then, for example, organize specific network events in certain regions. This platform offers KBC the opportunity to easily connect with prospects and customers at the "community level" and makes it scalable to keep an eye on what is effective among entrepreneurs.

### Product design


Meanwhile, our product designers organised a visual language workshop. From a brand perspective, it was necessary to understand the values and identity of the KBC brand and how it would defer with the specific KBC Vindr brand.

Based on the output of the ongoing Value Proposition Track, the designers started wireframing the most important key features and flows of the product to gain feedback from KBC and end-users. After a few design iterations, we were ready to start user validation to test the concept. We had the great opportunity to use KBC’s validation room - equipped with cameras, microphones and a see-through mirror to analyse how people interact with a prototype. These validations gave us enough confidence to continue design once we start development.
### Solution Architecture

Although KBC Vindr is not a banking solution and as in all of our projects, you don’t want to compromise on topics like security & privacy. Next to that, KBC has great ambitions with Vindr. That’s why one of the requirements was to be able to expand it to other countries and/or brands in the future, and make it highly integratable with other product/platforms in.

Our architects looked for the quality attributes that were important for the platform and arrived at a list of attributes with three main focus points:

* Security was of course a main concern for KBC. That’s why we focused extensively on the authentication, and gave users the ability to report inappropriate posts. 
* The reliability of the platform was important too. In order to reduce potential downtime to a minimum, we invested in monitoring and automation of releases. An SLA was set up to guarantee support and continuity with KBC. 
* Last but not least is the maintainability of KBC Vindr. It needs to be easy to make adjustments, for instance when new topics need to be defined or the feed algorithm requires an update.

Based on this, they were able to create an overview of the systems, how they interact with each other and chose the right technologies, where we decided to adapt React and Next.JS in the frontend, and node.js in the back-end. 

Our API is based on GraphQL, which gives us a very flexible and maintainable way to fetch data from our database. Each request only sends and receives the (nested) data that is really needed. To support the scalability requirements - the whole platform is hosted and runs on Google Cloud.

After an internal validation on these blueprints, the platform was redeveloped according to plan.

### The Development 

After our preliminary stage, we had 3,5 months for the go-live of the platform. That’s why the further design and development was done iterative and incremental. We started out with two-week sprints and increased the pace halfway towards dedicated focussed timeblocks of one week sprints. At the end of each sprint, we presented KBC a demo of a shippable increment.

As we had to go through different approval flows, penetration testing, … we were working on a tight schedule, where focus, dedication and good project management were key to not delay the time-to-market of the project. 

Every 4 weeks, we organised a steerco moment to discuss the progress of the project, identified risks and challenges and how we would mitigate them. This well-working practice wouldn't limit us of course to have ad-hoc product meetings and have smooth collaboration channels through slack - all remote seeing the Covid-lockdown.

Together with KBC we set up a go-to-market plan. We opted for a soft-launch, where we would onboard groups of active KBC 1.0 users frequently. This allowed us to make deliberate product improvements based on user data insights, thus providing a better user experience for each to be onboarded group. 

### The result?

A best-in-class front-end interface for entrepreneurs to connect them with others by helping them with their challenges and for KBC's community managers who now have a dashboard on which they can find relevant information. Consider, for example, the most active users in their regions, the trending topics and the overview of people who gave their commercial opt-in. The platform is not only available in Flanders, but in Wallonia as well.

The end? No, work doesn’t stop at shipping - we now will continue iterating on the interface and performance on the platform and work with KBC towards sustainable growth of the platform, making it the best entrepreneurship platform in Europe.