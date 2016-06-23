export default {
  githubPath: process.env.GITHUB_PATH || 'OpenSourceMe/LachieKermode',
  websiteFolder: process.env.WEBSITE_FOLDER || 'Website',
  branch: process.env.BRANCH || 'master',
  footer: {
    left: 'Thanks for using this software!',
    center: '<a href="https://github.com/OpenSourceMe/Website">Check out the source on Github</a>',
    right: '🙏🙏🙏',
  },
  home: {
    title: process.env.SITE_TITLE || 'My OpenSourceMe',
    template: 'Pieces',
    content: {
      type: 'folder',
      src: 'pieces',
    },
  },
  pages: [
    {
      title: 'about',
      template: 'md',
      content: {
        type: 'file',
        src: 'about.md',
      },
    },
    {
      title: 'music',
      template: 'md',
      content: {
        type: 'file',
        src: 'music.md',
      },
    },
    {
      title: 'portfolio',
      template: 'Portfolio',
      content: {
        type: 'folder',
        src: 'portfolio',
      },
    },
    {
      title: 'resume',
      template: 'Resume',
      content: {
        type: 'folder',
        src: 'resume',
      },
    },
  ],
};
