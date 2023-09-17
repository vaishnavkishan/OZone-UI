import apiService from "../Hooks/apiService";

export default {
  fetchEvents: async (date) => {
    const response = await apiService.get(`shows?date=${date}`);
    return response.data;
  },

  getSuggestions: async (payload) => {
    const response = await apiService.post("events/improve", payload);
    return response.data;
  },

  create: async (payload) => {
    const response = await apiService.post("events", payload);
    return response.data;
  },
};
