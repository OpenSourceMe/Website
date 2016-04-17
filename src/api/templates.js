/**
 * Template descriptors are named, and specify
 * both a regexp and the path to a handler.
 * This Object MUST have a default case.
 */
export default {
  PORTFOLIO: {
    matches: /Portfolio/,
    handler: './handlers/portfolio',
  },
  RESUME: {
    matches: /Resume/,
    handler: './handlers/resume',
  },
  BLOG: {
    matches: /Blog/,
    handler: './handlers/blog',
  },
  default: {
    matches: /Markdown|md/,
    handler: './handlers/markdown',
  },
};
