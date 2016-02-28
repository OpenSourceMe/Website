/* ********
  AUTHOR: breezykermo
  DATE: 11 February 2016 (Thursday)
  DESCRIPTION: resume data
  NOTES:
    object model maps to store state
    NB: can use markup syntax in section->content, nowhere else.

******** */
module.exports = {
  header: {
    'name': 'lachlan kermode',
    'profession': 'ios and web developer',
  },
  details: {
    location: 'based in rome, italy',
    website: 'www.lachlankermode.com',
    phoneNo: '+39 342 826 8415',
    email: 'lachiekermode@gmail.com',
  },
  skills: {
    'languages': [
      'English',
      'javascript (es5, es6)',
      'html | css',
      'python',
      'Italian',
      'swift',
      'ruby',
      'java',
      'Latin',
      'php',
      'go',
      'c',
    ],
    'frameworks+': [
      'react | redux',
      'bootstrap | foundation',
      'hapi',
      'mysql | postgresql',
      'django',
      'wordpress',
      'angular',
      'a touch of rails',
    ],
    'misc | other': [
      'bic lazio talenttime hackathon, 1st place',
      'hackzurich 2015, best use of dropbox api',
      'TEFL certified teacher',
      'outward bound, anakiwa nz',
      'ian turner cup for best all rounder, auckland grammar',
      'auckland university latin speaking 2012, 1st place',
      'enjoy pschoanalytic & theoretical literature',
      'enjoy listening to teen fantasy audiobooks',
    ],
  },
  sections: [
    {
      title: "interests",
      content: 'from auckland new zealand. singer & songwriter: acapella with [princeton footnotes](http://www.princetonfootnotes.com), \
      folk duo with "[baker and goods](https://bakerandgoods.bandcamp.com/releases)", singer in pop band "[chasing april](https://www.youtube.com/watch?v=Us3CcZmnwFA)".\
       music director and actor in various musicals at princeton, writer for [triangle club](http://www.triangleshow.com/) at princeton. nz water polo \
      representative 2012, princeton men\'s team 2014, nz champ marist mens team 2014. recently \
      completed half iron man. currently reading and listening to a lot of italian literature.',
    },
    {
      title: 'experience',
      pills: [
        {
          left: 'current',
          body: {
            title: 'web and ios freelancer',
            content: 'ios and web apps: universal react app with a hapi api & react native for a \
            client in australia, swift app for a client in new zealand, wordpress theme for a \
            client in princeton.',
          },
          right: 'rome, italy',
        },
        {
          left: 'june 2015 - feb 2016',
          body: {
            title: 'digital humanities, paideia institute',
            content: 'offered a fellowship on the back of a summer internship, i have built up a \
            nationbuilder website, an ios app, a chrome extension, and the beginnings of an api \
            endpoint for paideia, as well as automating several internal processes via scripts.',
          },
          right: 'rome, italy',
        },
        {
          left: 'summer 2014',
          body: {
            title: 'intern at the dentboard',
            content: 'a princeton startup providing specialized software for the us dental industry. \
            python scripts, web development, r&d, whatever needed helping with.',
          },
          right: 'princeton, new jersey',
        },
      ],
    },
    {
      title: 'education',
      pills: [
        {
          left: 'present',
          body: {
            title: 'princeton university, undergrad',
            content: 'studying computer science, currently on a one-year hiatus. classes also in \
            intellectual history, dance, theatre, economics.',
          },
          right: 'new jersey, usa',
        },
        {
          left: '2008-2012',
          body: {
            title: 'auckland grammar school',
            content: 'a levels in music, maths, english, physics. as levels in latin, classics, thinking \
            skills. senior prefect and leader of barbershop chorus!',
          },
          right: 'auckland, new zealand',
        },
      ],
    },
    {
      title: 'portfolio | references',
      content: '[source code](https://github.com/breezykermo/resume) for this over-powered resume hopefully serves as proof that i program. see \
      [my website](http://lachlankermode.com/) for a [portfolio](http://lachlankermode.com/portfolio/) of websites & apps i have done. references \
      (real words from real people) available on request.',
    },
  ],
};