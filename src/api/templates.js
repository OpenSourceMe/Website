/**
 * Template descriptors are named, and specify
 * both a regexp and the path to a handler.
 * This Object MUST have a default case.
 */
export default {
  portfolio: {
    matches: /Portfolio/,
    handler: './handlers/portfolio',
  },
  resume: {
    matches: /Resume/,
    handler: './handlers/resume',
  },
  pieces: {
    matches: /Pieces/,
    handler: './handlers/blog',
  },
  default: {
    matches: /Mark(D|d)own|(M|m)d/,
    handler: './handlers/markdown',
  },
};
