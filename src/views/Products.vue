<template>
  <div>test products {{ getCategory }}</div>
</template>

<script>
import store from "@/store/index";
export default {
  name: "Products",
  store: store,
  data() {
    return {
      category: this.$route.params.category,
    };
  },
  computed: {
    getCategory: function () {
      store.commit("getAllProductsWithCategory", this.$route.params.category);
      return this.$route.params.category;
    },
  },
  mounted: async function () {
    store.commit("getAllProductsWithCategory", this.category);
  },
};
</script>