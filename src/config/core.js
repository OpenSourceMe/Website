export default {
  githubPath: 'OpenSourceMe/LachieKermode',
  websiteFolder: 'Website',
  branch: 'master',
  home: {
    title: 'Lachlan Kermode',
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
