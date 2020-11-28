<template>
<v-app>
  <v-content>
  <div class="contenant">
    <v-img height="600" src="../assets/TopImg.png">
      <v-row align="center" justify="center">
         <v-text-field color="blue" class="texte_centrer" label="Recherche" solo></v-text-field>
      </v-row>
    </v-img>
    <v-container>
      <v-row class="mt-10">
        <v-img max-height="300" max-width="450" src="../assets/Carpet.jpg"></v-img>
          <v-col class="ml-16  pt-5  " >
          <h2>Tapis</h2>
          <p class="mt-5">Venez regarder tous nos tapis de jeux et personnalisez le tapis de vos rêves.</p>
          <v-btn style="color:white" 	x-large class="mt-5" color="#32374B" elevation="2">Découvrir les tapis</v-btn>
          </v-col>
       </v-row>

         <v-row class="mt-16">
          <v-col class="mr-16 pt-16 ">
          <h2 class="mt-10">Protèges cartes</h2>
          <p class="mt-5">Venez regarder tous nos protèges cartes  et personnalisez celui de vos rêves.</p>
          <v-btn style="color:white" 	x-large class="mt-5" color="#32374B" elevation="2">Découvrir les protèges</v-btn>
          </v-col>
          <v-img max-height="500" max-width="450" src="../assets/sleeves.png"></v-img>

       </v-row>

         <v-row class="mt-16">
        <v-img max-height="400" max-width="450" src="../assets/box.jpg"></v-img>
          <v-col class="ml-16  pt-5 ">
          <h2>Boîte pour cartes</h2>
          <p class="mt-5">Venez regarder tous nos boîtes à cartes  et personnalisez celui de vos rêves .</p>
          <v-btn style="color:white" 	x-large class="mt-5" color="#32374B" elevation="2">Découvrir les boîte</v-btn>
          </v-col>
       </v-row>
    </v-container>





    <router-view></router-view>
  </div>
  </v-content>
</v-app>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },

};
</script>

<style scoped>
.contenant {
  position: relative;
  text-align: center;
}

.texte_centrer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  border: black 1px;
  border-radius: 1vw;

}
</style>