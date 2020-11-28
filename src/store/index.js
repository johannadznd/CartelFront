import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: Object,
  },
  mutations: {

    async getAllProducts(state) {
      axios
        .get("product/tous")
        .then(response => {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async getAllProductsWithCategory(state, category) {
      axios
        .get("product/category/" + category)
        .then(response => {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async postUser(state, user) {
      axios
        .post("user/create", {
          firstName: user[0],
          lastName: user[1],
          email: user[2],
          adress: user[3]
      })
        .then(response => {
          state.user.push(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async postOrder(state, price) {
      axios
        .post("cardorder/create", {
          price: price,
          creation: new Date(),
          adress: "adress",
          user: "this.state.user"
        })
        .then(response => {
          return response;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
})
