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
        <v-icon large @click="drawer = true">mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      right
      temporary
      height="45vh"
      width="17vw"
      style="min-width: 300px; min-height: 300px"
    >
      <center>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              >Votre commande {{ order.length }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="item in organizingProducts(order)"
            :key="item.name"
          >
            <v-card class="ma-2">
              <v-img :src="item.picture" :lazy-src="item.picture"> </v-img>
              <div>
                <v-list-item-content>
                  <div>article : {{ item.name }} à {{ item.price }} €</div>
                  <div class="d-flex justify-center align-center">
                    quantité :

                    <v-icon
                      @click="removeOneItem(item)"
                      large
                      color="orange darken-2"
                    >
                      mdi-minus
                    </v-icon>
                    <div class="d-flex justify-center align-center">
                      {{ item.number }}
                    </div>

                    <v-icon
                      @click="addOneItem(item)"
                      large
                      color="orange darken-2"
                    >
                      mdi-plus
                    </v-icon>
                  </div>
                </v-list-item-content>
              </div>
            </v-card>
          </v-list-item>
          <router-link
            :to="{ name: 'FormCommand' }"
            class="text-decoration-none"
          >
            <v-btn
              style="color: white; width: 140px"
              large
              class="ma-5"
              color="#32374B"
              elevation="2"
              >commander</v-btn
            >
          </router-link>
        </v-list>
      </center>
    </v-navigation-drawer>
  </div>
</template>

<script>
import store from "@/store/index.js";
export default {
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
  computed: {
    order() {
      return store.state.order;
    },
  },
  methods: {
    getAllProducts: function (category) {
      store.dispatch("getAllProductsWithCategory", category);
    },
    organizingProducts: function (products) {
      var organizeProducts = [];
      var founded = false;

      for (let i = 0; i < products.length; i++) {
        founded = false;
        for (let j = 0; j < organizeProducts.length; j++) {
          if (products[i].name == organizeProducts[j].name) {
            organizeProducts[j].number++;
            founded = true;
          }
        }
        if (founded == false) {
          Object.defineProperty(products[i], "number", {
            value: 1,
            writable: true,
          });
          organizeProducts.push(products[i]);
        }
      }
      return organizeProducts;
    },
    removeOneItem: function (product) {
      var deleted = false;

      for (let i = 0; i < this.order.length; i++) {
        if (this.order[i].name == product.name && deleted == false) {
          this.order.splice(i, 1);
          deleted = true;
        }
      }
      console.log(this.order);
    },
    addOneItem: function (product) {
      var productToAdd = this.order.find(
        (element) => element.name == product.name
      );
      console.log(productToAdd);
      store.commit("addProductToOrder", productToAdd);
    },
  },
};
</script>