<template>
  <div>
    <NavBar></NavBar>
    test main
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "Main",
  data() {
    return {};
  },
  components: {
    NavBar ,
  },
};
</script>
