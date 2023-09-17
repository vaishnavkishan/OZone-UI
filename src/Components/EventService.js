import apiService from "../Hooks/apiService";

export default {
  fetchEvents: async (date) => {
    const response = await apiService.get(`shows?date=${date}`);
    return response.data;
  },

  getSuggestions: async (date) => {
    const response = await apiService.get(`path=${date}`);
    return response.data;
  },

  create: async (payload) => {
    const response = await apiService.post("events", payload);
    return response.data;
  },
  subscribe: async (payload) => {
    const response = await apiService.post("Subscriptions", payload);
    return response.data;
  },
};
