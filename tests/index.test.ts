import 'jest';
import { testy } from '../src';

test('does something', () => {
  expect(testy()).toBe('ahoy');
});

test('does something else', () => {
  expect(testy()).toBe('ahoy');
});

test('does something else', () => {
  console.log('ahoy?');
  expect(testy()).toBe('ahoy');
});
