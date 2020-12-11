<template>
  <v-data-iterator
    :items="items"
    :items-per-page.sync="itemsPerPage"
    :page="page"
    :search="search"
    :sort-by="sortBy.toLowerCase()"
    :sort-desc="sortDesc"
    hide-default-footer
    disable-filtering
    class="pa-4"
  >
    <template v-slot:header>
      <v-toolbar dark color="blue darken-3" class="mb-1">
        <v-text-field
          v-model="search"
          clearable
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
        ></v-text-field>
        <template v-if="$vuetify.breakpoint.mdAndUp">
          <v-spacer></v-spacer>
          <v-select
            v-model="sortBy"
            flat
            solo-inverted
            hide-details
            :items="keys"
            prepend-inner-icon="mdi-magnify"
            label="Sort by"
          ></v-select>
          <v-spacer></v-spacer>
          <v-btn-toggle v-model="sortDesc" mandatory>
            <v-btn large depressed color="blue" :value="false">
              <v-icon>mdi-arrow-up</v-icon>
            </v-btn>
            <v-btn large depressed color="blue" :value="true">
              <v-icon>mdi-arrow-down</v-icon>
            </v-btn>
          </v-btn-toggle>
        </template>
      </v-toolbar>
    </template>
    <template v-slot:default="props">
      <v-row>
        <v-col
          v-for="item in includeProduct(props.items)"
          :key="item.name"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <ProductCard :product="item" />
        </v-col>
      </v-row>
    </template>

    <template v-slot:footer>
      <v-row class="mt-2" align="center" justify="center">
        <span class="grey--text">Items per page</span>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              text
              color="primary"
              class="ml-2"
              v-bind="attrs"
              v-on="on"
            >
              {{ itemsPerPage }}
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(number, index) in itemsPerPageArray"
              :key="index"
              @click="updateItemsPerPage(number)"
            >
              <v-list-item-title>{{ number }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-spacer></v-spacer>

        <span class="mr-4 grey--text">
          Page {{ page }} of {{ numberOfPages }}
        </span>
        <v-btn fab dark color="blue darken-3" class="mr-1" @click="formerPage">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-row>
      <div v-if="products != undefined">
        {{ setproducts() }}
      </div>
      <Error :error="error" />
    </template>
  </v-data-iterator>
</template>

<script>
import store from "@/store/index.js";
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "Products",
  store: store,
  components: {
    ProductCard,
  },
  data() {
    return {
      category: this.$route.params.category,
      itemsPerPageArray: [4, 8, 12],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: "name",
      keys: ["name", "price"],
      items: [],
      error: [],
    };
  },
  computed: {
    getCategory: function () {
      return this.$route.params.category;
    },
    products() {
      return store.state.products;
    },
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "name");
    },
  },
  mounted: async function () {
    store
      .dispatch("getAllProductsWithCategory", this.category)
      .catch((error) => {
        this.error = error.response;
      });
  },

  methods: {
    setproducts() {
      this.items = this.products;
    },
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    includeProduct(products) {
      if (this.search == null) {
        return products;
      }
      var filteredProducts = [];
      products.forEach((element) => {
        if (element.name.toLowerCase().includes(this.search.toLowerCase()) == true) {
          filteredProducts.push(element);
        }
      });
      return filteredProducts;
    },
  },
};
</script>