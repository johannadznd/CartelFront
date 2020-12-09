<template>
  <v-app>
    <v-main>
      <v-container class="mt-16">
        <v-row class="mt-10">
          <v-img
            max-height="300"
            max-width="450"
            :src="product.picture"
            lazy-src="https://zupimages.net/up/20/50/jqpo.jpg"
          ></v-img>
          <v-col class="ml-16 mt-n6" >

            <h2 class="text-center">{{ product.name }}</h2>

             <v-row justify="center" class="mt-5">
              <v-expansion-panels inset>
                <v-expansion-panel>
                  <v-expansion-panel-header>Description</v-expansion-panel-header>
                  <v-expansion-panel-content>
                      {{product.description}}
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
             </v-row>
            <p class="mt-5" style="font-size: 20px">Taille du produit :  {{product.dimension}}</p>
          
          
          <p class="mt-5" style="font-size: 20px">Prix : {{ product.price }} €</p>
            
          <v-card-actions class="d-flex justify-center">
             <v-btn
                @click="addToOrder(product)"
                style="color: white"
                x-large
                class="mt-5"
                color="#32374B"
                elevation="2"
                >Acheter ce produit</v-btn
              >
          </v-card-actions><Error :error="error" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import store from "@/store/index.js";
export default {
  name: "Product",
  store: store,
  data() {
    return {
      idProduct: this.$route.params.id,
      keys: ["name", "price"],
      error: [],
    };
  },
  methods: {
    addToOrder(product) {
      store.commit("addProductToOrder", product).catch((error) => {
        this.error = error.response;
      });
    },
  },
  mounted: async function () {
    store.dispatch("getProductById", this.idProduct).catch((error) => {
      this.error = error.response;
    });
  },

  computed: {
    product() {
      return store.state.product;
    },
  },
};
</script>
