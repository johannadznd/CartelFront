<template>
  <div>
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      height="180px"
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
        <button @click="page = 4">
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
              >Cartel
            </v-toolbar-title>
          </router-link>
        </button>
      </div>

      <template v-slot:extension>
        <v-tabs
          style="padding-left: 8%; margin-right: 20px"
          :optional="productTab"
          v-model="page"
        >
          <button
            @click="
              getAllProducts(category.name);
              page = category.id;
            "
            v-for="category in categories"
            :key="category.surname"
          >
            <router-link
              :to="{
                name: category.route,
                params: { category: category.name },
              }"
              class="text-decoration-none"
            >
              <v-tab class="white--text" style="height: 100%; font-size: 50%"
                >{{ category.surname }}
              </v-tab>
            </router-link>
          </button>
        </v-tabs>
      </template>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon @click="drawer = true">mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute right temporary height="400">
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in categories" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import store from "@/store/index.js";
export default {
  methods: {
    getAllProducts: function (category) {
      store.dispatch("getAllProductsWithCategory", category);
    },
  },
  name: "NavBar",
  store: store,
  data() {
    return {
      drawer: false,
      page: "4",
      productTab: true,
      categories: [
        {
          id: 0,
          surname: "Tapis de jeu",
          name: "carpet",
          route: "Products",
        },
        {
          id: 1,
          surname: "Protège cartes",
          name: "sleeve",
          route: "Products",
        },
        {
          id: 2,
          surname: "boites pour deck",
          name: "box",
          route: "Products",
        },
      ],
    };
  },
};
</script>