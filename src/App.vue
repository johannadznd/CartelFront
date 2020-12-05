<template>

  <Main />
</template>

<script>
import Main from "@/layouts/Main.vue";

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/';

export default {
  name: "App",

  components: {
    Main,
  },
};
</script>
