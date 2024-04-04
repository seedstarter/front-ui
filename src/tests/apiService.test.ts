import { postToNest } from '../apiService';
import fetchMock from 'jest-fetch-mock'


describe('postToNest', () => {
  beforeEach(() => {
    fetchMock.doMock()
  });

  it('posts data and returns the response', async () => {
    const mockData = {
      id: 1,
      title: "I am in love with someone.",
      userId: 5
    };
    fetchMock.mockResponseOnce(JSON.stringify(mockData));

    const formData = {  
      title: 'I am in love with someone.',
      userId: 5, 
    };
    const response = await postToNest(formData);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/products/1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    expect(response).toEqual(mockData);
  });

  it('throws an error when the fetch fails', async () => {
    fetchMock.mockRejectOnce(new Error('Fetch failed'));
  
    const formData = { userId: 5};
    let error;
    await postToNest(formData).catch((error) => {
        expect(error).toBeDefined();
        expect(error.message).toBe('Fetch failed');
    });
  });
});