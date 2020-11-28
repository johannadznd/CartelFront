import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: any,
  },
  mutations: {

    async getAllProducts(state) {
      axios
        .get("product/tous")
        .then(response => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async getAllProductsWithCategory(state, category) {
      axios
        .get("product/category/" + category)
        .then(response => {
          state.user.push(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async postUser(state, firstName, lastName, email, adress) {
      axios
        .post("user/create", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          adress: adress,
        })
        .then(response => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async postOrder(state, price, adress) {
      axios
        .post("cardorder/create", {
          price: price,
          creation: Date.now(),
          adress: adress,
          user: state.user
        })
        .then(response => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  actions: {
  },
  modules: {
  }
})
