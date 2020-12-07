<template>
  <v-alert class="ma-2" elevation="11" type="error" dismissible v-if="error.length != 0"
    >erreur {{ error.data.status }} : {{ error.data.error }}</v-alert
  >
</template>

<script>
import store from "@/store/index.js";
export default {
  name: "Error",
  store: store,
  computed: {
    error() {
      if (store.state.error) {
        return store.state.error;
      }
      return "";
    },
  },
};
</script>