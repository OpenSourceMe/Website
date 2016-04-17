/**
 * Template descriptors are named, and specify
 * both a regexp and the path to a handler.
 * This Object MUST have a default case.
 */
export default {
  MARKDOWN: {
    matches: /Markdown/,
    handler: "./templates/markdown",
  },
  PORTFOLIO: {
    matches: /Portfolio/,
    handler: "./templates/portfolio",
  },
  RESUME: {
    matches: /Resume/,
    handler: "./templates/resume",
  },
  BLOG: {
    matches: /Blog/,
    handler: "./templates/blog",
  },
  default: {
    matches: /.*/,
    handler: "./templates/markdown",
  },
};