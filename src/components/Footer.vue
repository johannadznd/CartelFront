<template>
  <v-footer padless color="rgba(25,32,110,.7)">
    <v-col class="text-center white--text" cols="12">
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