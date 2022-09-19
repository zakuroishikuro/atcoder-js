const { URL, tasksUrl } = require('./new.js');

test('contestUrl', () => {
  expect(tasksUrl('abc269')).toBe('https://atcoder.jp/contests/abc269/tasks');
  expect(tasksUrl('https://atcoder.jp/contests/abc269/tasks')).toBe('https://atcoder.jp/contests/abc269/tasks');
});
