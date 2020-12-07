<template>
  <v-app>
    <NavBar />

    <v-main>
      <v-container fluid style="margin-top: 240px">
        <router-view></router-view>
      </v-container>
    </v-main>
    
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Main",
  components: {
    Footer,
    NavBar,
  },
  data() {
    return {};
  },
};
</script>