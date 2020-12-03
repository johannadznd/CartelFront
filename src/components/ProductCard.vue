<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="product.picture" height="200px"></v-img>

    <v-card-title>
      {{ product.name }}
    </v-card-title>

    <v-card-subtitle class="d-flex"> {{ product.price }} ‎€ </v-card-subtitle>

    <router-link
      :to="{ name: productDescription, params: { idProduit: product.id } }"
      class="text-decoration-none"
    >
      <v-card-actions>
        <v-btn color="grey white--text lighten-2" text @click="addToOrder(product)"> Acheter </v-btn>
      </v-card-actions>
    </router-link>
  </v-card>
</template>

<script>
import store from '@/store/index.js';
export default {
  methods: {
    addToOrder(product) {
      store.commit('addProductToOrder', product);
    },
  },
  name: "ProductCard",
  store: store,
  props: ["product"],
  data() {
    return {};
  },
};
</script>