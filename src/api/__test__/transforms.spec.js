import test from 'tape';
import {
  getPageHandler,
} from '../transforms';

test('getPageHandler', t => {
  t.plan(4);

  const mockPage = {
    title: 'Test',
    template: 'UnspecificTemplate',
    content: {
      title: 'Test page',
      src: 'somesrc.md',
    },
  };

  const mockPortfolio = {
    title: 'Portfolio',
    template: 'Portfolio',
    content: {
      title: 'Portfolio',
      src: 'somesrc.md',
    },
  };

  const unspecifiedHandler = getPageHandler(mockPage);
  t.equal(typeof unspecifiedHandler, 'function', 'Unspecified handler is function');
  t.equal(unspecifiedHandler.name, 'markdownHandler', 'Defaults to markdownHandler');

  const specifiedHandler = getPageHandler(mockPortfolio);
  t.equal(typeof specifiedHandler, 'function', 'Specified handler is function');
  t.equal(specifiedHandler.name, 'portfolioHandler', 'Handles by template string');
});
