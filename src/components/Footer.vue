<template>
  <v-footer padless color="grey">
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Cartel</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>