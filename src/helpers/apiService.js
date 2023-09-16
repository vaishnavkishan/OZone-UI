import axios from "axios";

const promiseWithErrorHandling = (promise) => {
  return promise.catch((err) => {
    if (err.response && err.response.status === 500) {
      // noinspection JSCheckFunctionSignatures
      window.location.assign("/error");
    } else {
      throw err;
    }
  });
};

const urls = "";

export default {
  post: async (path, payload) => {
    return promiseWithErrorHandling(axios.post(`${urls}/${path}`, payload));
  },

  get: async (path) => {
    return promiseWithErrorHandling(axios.get(`${urls}/${path}`));
  },

  getWithParameter: async (path, parameter) => {
    return promiseWithErrorHandling(axios.get(`${urls}/${path}`, parameter));
  },

  postWithoutErrorHandling: async (path, payload) => {
    return axios.post(`${urls}/${path}`, payload);
  },

  postSignup: async (path, payload) => {
    return promiseWithErrorHandling(axios.post(`${urls}/${path}`, payload));
  },

  put: async (path, payload) => {
    return promiseWithErrorHandling(axios.put(`${urls}/${path}`, payload));
  },
};
