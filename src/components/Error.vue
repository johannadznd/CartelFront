<template>
  <v-alert
    class="ma-2 white--text"
    elevation="11"
    type="error"
    v-if="error != undefined && error.length != 0"
    dismissible
  >
    erreur {{ checkStatus(error.status) }} : {{ error.data.error }}
  </v-alert>
</template>

<script>
export default {
  methods: {
    checkStatus(status) {
      if (status == "404") {
        this.$router.replace({
          name: "NotFound",
        });
      }
    },
  },
  name: "Error",
  props: ["error"],
};
</script>