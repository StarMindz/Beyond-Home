import { fetchAPOD } from '../redux/apod/apodSlice';

describe('fetchAPOD function test', () => {
  test('fetchAPOD is a function', () => {
    expect(typeof fetchAPOD).toBe('function');
  });
});
