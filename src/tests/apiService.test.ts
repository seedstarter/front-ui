import { postToNest } from '../apiService';
import fetchMock from 'jest-fetch-mock'


describe('postToNest', () => {
  beforeEach(() => {
    fetchMock.doMock()
  });

  it('posts data and returns the response', async () => {
    const mockData = { id: 1, name: 'Test User' };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const formData = { name: 'Test User' };
    const response = await postToNest(formData);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('http://localhost:8082/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    expect(response).toEqual(mockData);
  });

  it('throws an error when the fetch fails', async () => {
    fetchMock.mockRejectOnce(new Error('Fetch failed'));
  
    const formData = { name: 'Test User' };
    let error;
    await postToNest(formData).catch((error) => {
        expect(error).toBeDefined();
        expect(error.message).toBe('Fetch failed');
    });
  });
});