import { fetchNASA, fetchSearch } from '../redux/library/librarySlice';

describe('fetchNASA function test', () => {
  test('fetchNASA is a function', () => {
    expect(typeof fetchNASA).toBe('function');
  });
});

describe('fetchSearch function test', () => {
  test('fetchSearch is a function', () => {
    expect(typeof fetchSearch).toBe('function');
  });
});
