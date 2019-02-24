const axios = {
    get: jest.fn(() => Promise.resolve({
        data: {
            results: [{
                id: '123',
                likes: 200,
                description: 'cat',
                urls: {
                    small: 'https://smallurl.com'
                },
                links: {
                    download: 'https://downloadme.com'
                }
            }]
        }
    })),
    create: () => axios,
    defaults: {
        adapter: {},
    },
};

export default axios;