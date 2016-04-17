title: my Overpowered Website
date: 29.02.2016

This weekend I rewrote my entire website from scratch. For the past year or so, I have been using [Jekyll](https://jekyllrb.com/) to generate static pages, and then hosting those pages as a [static site via an Amazon S3 Bucket](http://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html). This worked fairly well. Jekyll transforms Markdown to HTML, and also allows you to write inline HTML, so if I wanted to put anything 'webby' in my blogs (e.g. an iframe, colors, a decorated modal), I could just write it into a standard page using HTML. I'm not invested in or excited by Jekyll, so I didn't bother to read up too much on its ins and outs: I just ran it in the command line, and dumped the static files to my bucket.

As I am becoming more interested in [Go](https://golang.org/), I decided to switch my site to [Hugo](https://gohugo.io/), a static engine that seems faster and more flexible, in comparison with Jekyll. As I started playing around with it, I realised that I wanted my front end in [React](https://facebook.github.io/react/). I've been using the front end framework for virtually all my projects these days, because it is compatible with [declarative JavaScript](https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95), and works nicely in tandem with the wild and revolutionary [Redux](https://github.com/reactjs/react-redux), in which I adore programming, for more complex projects.

I started playing around with the [React static boilerplate on Yeoman](https://github.com/koistya/react-static-boilerplate), and quickly came up with a fast-moving simple site. Wanting to make as many of my React components [stateless and functional](https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d), I started factoring text and other content, and decided to switch to my [react | redux boiler](https://github.com/breezykermo/react-redux-boiler), because I'm familiar with the code[^1]. I sometimes use Redux state management even in simple sites, as it just makes state management easy; if I want a rotating gear at the bottom of the screen that animates between page turns and displays info, the Redux store keeps track of everything, and I just dispatch actions when I want it to update[^2].

Because my site is in part a blog, I need visitors to be able to enter it from more than one URL path (e.g., [www.lachlankermode.com/blog/history-falling-apart](http://www.lachlankermode.com/blog/history-falling-apart), [www.lachlankermode.com/resume](http://www.lachlankermode.com/resume)), which I can't do with a client-hosted React site, as routing is handled via client-side JavaScript, not by a folder directory that just serves the file at the appropriate route when requested. So I added [server-side rendering](https://www.codementor.io/reactjs/tutorial/redux-server-rendering-react-router-universal-web-app) to the project, to preload the relevant state given the nature of the visitor's request on the server, and then serve to the client the appropriate JavaScript. The [example setup I worked with](https://github.com/StevenIseki/react-router-redux-example) asychronously fetches data and flushes it into the redux state before serving files to the client, and given I'll potentially want to load data from separate asynchronous sources into my site in the future, I decided to take the extra half hour and set up my site with that capability as well. I rewrote my [blogs and static pages as JSON](https://github.com/breezykermo/lachlankermode.com/tree/master/src/api/data), and switched to loading them asynchronously into Redux state via an [Express](http://expressjs.com/) API.

To host my server, I created an [Docker](https://www.docker.com/) image[^3] from the [mhart/alpine-node](https://github.com/mhart/alpine-node) base image (thinner than the official Node image), and pushed it to Docker Hub. Amazon's [Elastic Beanstalk](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html) is an easy way to run Docker containers from images that exist in the Docker Hub repo[^4]. Additionally, my domain's nameservers were already pointed to my AWS account through [Route 53](https://aws.amazon.com/route53/), because I had previously been hosting my site through an [Amazon S3](https://aws.amazon.com/s3/) bucket, so it was a breeze to direct traffic at [lachlankermode.com](http://www.lachlankermode.com) to my new Elastic Beanstalk container (update: am now hosting through [Digital Ocean](https://www.digitalocean.com/)).

After the weekend's work, I am out the other side with a speedy new site, and an [undocumented, scatterbrained React | Redux blog engine](https://github.com/breezykermo/lachlankermode.com) that has no test suite. When I was foraying into web development two years ago at my regular cafe in Princeton, NJ, I resolved to write my entire site from scratch as a pedagogical exercise. Two years later, at the wooden table in my apartment where I live with Italian male nurses, I have completed my project -- sort of.

Here's the start of my site's long to-do list:

 - Sort out dev environment; it's a mess.
 - Comment code.
 - Write a test suite.
 - Remedy hacks that are all over the place.
 - Refactor React components to make more sense
 - Allow for interactive resume editing ([halfway there](https://github.com/breezykermo/lachlankermode.com/tree/master/src/resume))
 - Code an admin site, with blog editor.
 - interactive archive!

On my old site, I [mentioned](/blog/the-coming-archive) that I was working on a interactive, personal archive. This upgrade is moving towards that realization. The data for the archive will be stored via the Express API, and it will be displayed via a section of the current site.

I'm not specifically planning to make this blog engine into a platform, although if it advances far enough, I might consider it in the future (because everyone wants a React | Redux blog for their personal site, right?). Hit me up on Twitter [@lachlankermode](https://twitter.com/lachlankermode) or via [email](mailto:lachlankermode@live.com?Subject=here%20are%20my%20thoughts) if you have questions or comments.

breeze and be well.


[^1]: Another great thing about React is that it's wild easy to migrate components and even entire sections of projects to other projects, especially if you're abiding by functional paradigms. Later on in this narrative, I literally drag-and-dropped some an [over-powered resume component](https://github.com/breezykermo/resume) I wrote about a week ago into the site, did a tiny bit of configuration to connect the disparate redux reducers, and I was good to go. This would be even easier if I had written the above-stated resume component as an npm module, or added one more layer of abstraction at the top level.

[^2]: I'm not going to dive into Redux here. [Read the docs](http://redux.js.org/docs/introduction/) if you're interested, they are sublime.

[^3]: Seriously check Docker out if you don't know about it, it's incredible. [Here's a good article](http://www.zdnet.com/article/what-is-docker-and-why-is-it-so-darn-popular/) to get started.

[^4]: and they also have their own Docker repo, [Amazon EC2 Container Service](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html). I thought about hosting my container through the newly birthed [dockercloud](https://cloud.docker.com/container/list/), the progeny of the soon-to-be-late [Tutum](https://www.tutum.co/), but found its infrastructure to be too comprehensive and complicated for my needs. I just wanted a single container, from a single image, with no volumes or networks or other complexities.
