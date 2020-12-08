<template>
  <Main />
</template>

<script>
import Main from "@/layouts/Main.vue";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/";
import store from "@/store/index.js";

export default {
  name: "App",
  store: store,
  components: {
    Main,
  },
};
</script>
