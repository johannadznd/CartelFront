<template>
  <v-alert
    class="ma-2 white--text"
    elevation="11"
    color="red"
    v-if="error.length != 0"
  >
    <div class="d-flex align-center">
      <v-icon class="mr-2 ml-2" color="white">mdi-alert</v-icon>
      erreur {{ error.data.status }} : {{ error.data.error }}
      <v-spacer class="d-flex justify-end">
        <v-btn @click="resetError()" icon color="white"
          ><v-icon> mdi-close </v-icon></v-btn
        >
      </v-spacer>
    </div>
  </v-alert>
</template>

<script>
import store from "@/store/index.js";
export default {
  watch: {
    $route(to, from) {
      this.resetError();
    },
  },
  methods: {
    resetError() {
      store.commit("setError", []);
    },
  },
  name: "Error",
  store: store,
  computed: {
    error() {
      if (store.state.error != []) {
        return store.state.error;
      }
      return "";
    },
  },
};
</script>