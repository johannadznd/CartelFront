<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="product.picture" height="200px"></v-img>

    <v-card-title>
      {{ product.name }}
    </v-card-title>

    <v-card-subtitle> {{ product.price }} ‎€ </v-card-subtitle>

    <router-link
      :to="{ name: productDescription, params: { category: product.id } }"
      class="text-decoration-none"
    >
      <v-card-actions>
        <v-btn color="grey white--text lighten-2" text> Acheter </v-btn>
      </v-card-actions>
    </router-link>
  </v-card>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["product"],
  data() {
    return {};
  },
};
</script>