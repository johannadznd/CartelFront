<template>
  <v-app>
    <v-main>
      <div class="contenant">
        <v-img
          height="600"
          src="../assets/TopImg.png"
          lazy-src="assets/blanc.png"
        >
          <v-row align="center" justify="center">
            <v-autocomplete
              v-model="select"
              :items="items"
              :search-input.sync="search"
              cache-items
              class="mx-4 texte_centrer"
              flat
              hide-no-data
              hide-details
              label="rechercher un produit"
              color="blue"
              solo
              clearable
            ></v-autocomplete>
          </v-row>
        </v-img>
        <Error :error="error" />
        <v-container v-if="search == null || search.length == 0">
          <v-row class="mt-10">
            <v-img
              max-height="300"
              max-width="450"
              src="../assets/Carpet.jpg"
              lazy-src="assets/blanc.png"
            ></v-img>
            <v-col class="ml-16 pt-5">
              <h2>Tapis</h2>
              <p class="mt-5">
                Venez regarder tous nos tapis de jeux et personnalisez le tapis
                de vos rêves.
              </p>
              <router-link to="products/carpet" class="text-decoration-none">
                <v-btn
                  style="color: white"
                  x-large
                  class="mt-5"
                  color="#32374B"
                  elevation="2"
                  >Découvrir les tapis</v-btn
                >
              </router-link>
            </v-col>
          </v-row>

          <v-row class="mt-16">
            <v-col class="mr-16 pt-16">
              <h2 class="mt-10">Protèges cartes</h2>
              <p class="mt-5">
                Venez regarder tous nos protèges cartes et personnalisez celui
                de vos rêves.
              </p>
              <router-link to="products/sleeve" class="text-decoration-none">
                <v-btn
                  style="color: white"
                  x-large
                  class="mt-5"
                  color="#32374B"
                  elevation="2"
                  >Découvrir les protèges</v-btn
                >
              </router-link>
            </v-col>
            <v-img
              max-height="500"
              max-width="450"
              src="../assets/sleeves.png"
              lazy-src="assets/blanc.png"
            ></v-img>
          </v-row>

          <v-row class="mt-16">
            <v-img
              max-height="400"
              max-width="450"
              src="../assets/box.jpg"
              lazy-src="assets/blanc.png"
            ></v-img>
            <v-col class="ml-16 pt-5">
              <h2>Boîte pour cartes</h2>
              <p class="mt-5">
                Venez regarder toutes nos boîtes à cartes et personnalisez
                celles de vos rêves .
              </p>
              <router-link to="products/box" class="text-decoration-none">
                <v-btn
                  style="color: white"
                  x-large
                  class="mt-5"
                  color="#32374B"
                  elevation="2"
                  >Découvrir les boîtes</v-btn
                >
              </router-link>
            </v-col>
          </v-row>
        </v-container>
        <v-container v-else>
          <v-row v-if="items.length != 0">
            <v-col
              v-for="item in testContainProductsInput(getProducts)"
              :key="item.name"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <ProductCard :product="item" />
            </v-col>
          </v-row>

          <v-alert v-else class="mt-4" elevation="10" type="warning">Le produit que vous recherchez n'existe pas ou n'est plus disponible</v-alert>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import store from "@/store/index.js";
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "Home",
  components: {
    ProductCard,
  },
  data() {
    return {
      items: [],
      search: null,
      select: null,
      products: [],
      error: [],
    };
  },
  store: store,
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val);
    },
  },
  methods: {
    querySelections(v) {
      this.items = this.products.filter((e) => {
        return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
      });
    },
    setProducts() {
      this.getProducts.forEach((product) => this.products.push(product.name));
    },
    testContainProductsInput(products) {
      var productsFiltered = [];
      for (var i = 0; i < products.length; i++) {
        if (this.select == null) {
          for (var j = 0; j < this.items.length; j++) {
            if (products[i].name == this.items[j]) {
              productsFiltered.push(products[i]);
            }
          }
        } else {
          if (products[i].name == this.select) {
            productsFiltered.push(products[i]);
          }
        }
      }
      return productsFiltered;
    },
  },
  computed: {
    getProducts() {
      return store.state.products;
    },
  },
  mounted: function () {
    store
      .dispatch("getAllProducts")
      .then(() => this.setProducts())
      .catch((error) => {
        this.error = error.response;
      });
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
  min-width: 270px;
  border: black 1px;
  border-radius: 1vw;
}
</style>