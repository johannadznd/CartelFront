<template>
  <v-app-bar
    absolute
    color="#6A76AB"
    dark
    shrink-on-scroll
    prominent
    src="https://img5.goodfon.com/wallpaper/nbig/9/a5/vladimir-malakhovskiy-by-vladimir-malakhovskiy-mafia-illustr.jpg"
    fade-img-on-scroll
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

    <div class="d-flex flex-column justify-center align-center">
      <router-link :to="{ name: 'Home' }" class="text-decoration-none">
        <v-img
          :src="`https://cdn.discordapp.com/attachments/757512066302083132/782175985218617344/logo.png`"
          :lazy-src="`https://cdn.discordapp.com/attachments/757512066302083132/782175985218617344/logo.png`"
          style="width: 120px"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <v-toolbar-title
          class="d-flex justify-center align-center white--text"
          style="width: 100%"
          >Cartel</v-toolbar-title
        >
      </router-link>
    </div>

    <template v-slot:extension>
      <v-tabs style="padding-left: 8%; margin-right: 20px;">
        <router-link
          v-for="category in categories"
          :key="category.surname"
          :to="{ name: category.route, params: { category: category.name } }"
          class="text-decoration-none"
        >
          <v-tab class="white--text" style="height: 100%; font-size: 50%">{{
            category.surname
          }}</v-tab>
        </router-link>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      categories: [
        {
          surname: "Tapis de jeu",
          name: "carpet",
          route: "Products",
        },
        {
          surname: "Protège cartes",
          name: "sleeve",
          route: "Products",
        },
        {
          surname: "boites pour decks",
          name: "box",
          route: "Products",
        },
      ],
    };
  },
};
</script>