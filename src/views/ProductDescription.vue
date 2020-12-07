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
            <v-col class="ml-16 pt-5">
              <h2> {{ product.name }}</h2>
              <p class="mt-5" style="font-size:20px">
                {{ product.price }} €
              </p>
               <p class="mt-5 text-center">
                Dimention :
              </p>
               <p style="border-bottom: solid 1px black;" class="mt-5 text-center pb-3 "  border="top">
                 {{product.dimension}}
              </p>
              <v-card-actions  class="d-flex justify-center mt-16">
              <v-btn
               @click="addToOrder(product)"
                style="color: white"
                x-large
                class="mt-5 "
                color="#32374B"
                elevation="2"
                >Acheter ce produit</v-btn>
              </v-card-actions>
            </v-col>
            </v-row>
          </v-container>
        </v-main>
    </v-app>
</template>

<script>
import store from '@/store/index.js';
export default {
  name: "Product",
  store: store,
  data() {    
    return { 
      idProduct: this.$route.params.id,
      keys: ["name", "price"],
    };
  },
  methods: {
    addToOrder(product) {
      store.commit('addProductToOrder', product);
    },
  },
   mounted: async function () {
    store.dispatch("getProductById", this.idProduct);
  },
  
  computed:{

    product(){
      return store.state.product;
    },

  }
};
</script>
