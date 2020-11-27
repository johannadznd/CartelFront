<template>
  <div>
    test home
  </div>
</template>

<script>
import store from '@/store/index';
export default {
  name: "Home",
  store: store,
  data() {
    return {};
  },
  mounted: async function () {
    store.commit("getAllProductsWithCategory", "carpet");
  },
};
</script>
