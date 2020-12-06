import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [],
    products: [],
    order: [],
    product:[],
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
      await axios
        .get("product/tous")
        .then(response => {
          context.commit("setProducts", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async getProductById(context, id ) {
      await axios
        .get("product/" + id)
        .then(response => {
          context.commit("setProduct", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async getAllProductsWithCategory(context, category) {
      await axios
        .get("product/category/" + category)
        .then(response => {
          context.commit("setProducts", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async postOrder({context, state}, price) {
      await axios
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
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },

    setProduct(state, product) {
      state.product = product;
    },

    setOrder(state, order) {

      state.order = order;
    },
    addProductToOrder(state, product) {
      state.order.push(product);
      console.log(state.order);
    },
  },
})
