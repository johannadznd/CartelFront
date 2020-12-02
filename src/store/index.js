import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [],
    products: [],
    order: [],
  },
  actions: {
    async postUser(context, user) {
      await axios
        .post("user/create", {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          adress: user.address,
        })
        .then(response => {
          context.commit("setUser", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });

    }
  },
  mutations: {
    async setUser(state, user) {
      state.user = user;
    },
    async getAllProducts(state) {
      axios
        .get("product/tous")
        .then(response => {
          state.products = response;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    getAllProductsWithCategory(state, category) {
      axios
        .get("product/category/" + category)
        .then(response => {
          state.products = response;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async postUser(state, user) {
      await axios
        .post("user/create", {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          adress: user.address,
        })
        .then(response => {
          state.user = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
      return state.user;
    },

    postOrder(state, price) {
      axios
        .post("cardorder/create", {
          price: price,
          creation: new Date(),
          adress: "adress",
          user: state.user
        })
        .then(response => {
          state.order = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
})
