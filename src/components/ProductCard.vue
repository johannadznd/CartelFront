<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
      :src="product.picture"
      lazy-src="https://zupimages.net/up/20/50/jqpo.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ product.name }}
    </v-card-title>

    <v-card-subtitle class="d-flex"> {{ product.price }} ‎€ </v-card-subtitle>

    <router-link
      :to="{ name: 'Product', params: { id: product.id } }"
      class="text-decoration-none"
    >
      <v-btn color="grey white--text lighten-2" text> Acheter </v-btn>
    </router-link>
  </v-card>
</template>

<script>
import store from "@/store/index.js";
export default {
  name: "ProductCard",
  store: store,
  props: ["product"],
};
</script>