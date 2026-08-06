import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateQuote } from '../src/utils/quoteCalculator.js';

test('calculates a starter quote with base pages and forms', () => {
  const quote = calculateQuote({
    budget: 'starter',
    pages: 4,
    forms: 1,
    blog: false,
    ecommerce: false,
    timeline: 'standard',
    design: 'template'
  });

  assert.equal(quote.total, 2850);
  assert.equal(quote.rangeLow, 2565);
  assert.equal(quote.rangeHigh, 3278);
  assert.equal(quote.tier, 'Starter');
});

test('adds premium costs for ecommerce, custom design, and rush timeline', () => {
  const quote = calculateQuote({
    budget: 'growth',
    pages: 8,
    forms: 3,
    blog: true,
    ecommerce: true,
    timeline: 'rush',
    design: 'custom'
  });

  assert.equal(quote.total, 8700);
  assert.equal(quote.tier, 'Growth');
});
