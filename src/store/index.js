import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

const _api = axios.create({
  baseURL:
    "https://api.nasa.gov/planetary/apod?api_key=np7AWlK1hbNJWnarcDxVZ2l09BYzvQhariZhs87a",
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataObj: {},
  },
  mutations: {
    setDataObj(state, data) {
      state.dataObj = data;
    },
  },
  actions: {
    async hitApi({ commit, dispatch }) {
      try {
        let res = await _api.get("");
        console.log(res.data);
        commit("setDataObj", res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
