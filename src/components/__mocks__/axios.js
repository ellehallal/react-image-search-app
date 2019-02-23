const axios = {
    get: jest.fn(() => Promise.resolve({
        data: {
            results: [1, 2, 3, 4, 5]
        }
    })),
    create: () => axios,
    defaults: {
        adapter: {},
    },
};

export default axios;