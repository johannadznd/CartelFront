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
    },
    async getAllProducts(context) {
      axios
        .get("product/tous")
        .then(response => {
          context.commit("setProducts", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async getAllProductsWithCategory(context, category) {
      axios
        .get("product/category/" + category)
        .then(response => {
          context.commit("setProducts", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async postOrder({context, state}, price) {
      axios
        .post("cardorder/create", {
          price: price,
          creation: new Date(),
          adress: "adress",
          user: state.user,
          products: state.order
        })
        .then(response => {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mutations: {
    async setUser(state, user) {
      state.user = user;
    },
    async setProducts(state, products) {
      state.products = products;
    },
    async setOrder(state, order) {
      state.order = order;
    },
    async addProductToOrder(state, product) {
      state.order.push(product);
      console.log(state.order);
    },
  },
})
