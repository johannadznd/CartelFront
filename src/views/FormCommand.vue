<template>
  <v-row align="center" justify="center">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      style="min-width: 300px; width: 40vw"
    >
      <v-text-field
        v-model="user.firstName"
        :rules="[rules.required]"
        label="prénom"
        required
      ></v-text-field>

      <v-text-field
        v-model="user.lastName"
        :rules="[rules.required]"
        label="nom"
        required
      ></v-text-field>

      <v-text-field
        v-model="user.email"
        :rules="[rules.required, rules.email]"
        label="email pour payement paypal"
        required
      ></v-text-field>

      <v-text-field
        v-model="user.address"
        :rules="[rules.required]"
        label="adresse de livraison"
        required
      ></v-text-field>
      <center>
        <router-link :to="{ name: 'Home' }" class="text-decoration-none">
          <v-btn
            large
            class="ma-5"
            color="white"
            elevation="2"
            style="width: 140px"
            >annuler</v-btn
          >
        </router-link>
        <v-btn
          style="color: white; width: 140px"
          large
          class="ma-5"
          color="#32374B"
          elevation="2"
          :disabled="!valid"
          @click.prevent="createCommand()"
          >commander</v-btn
        >
      </center>
      <div v-if="success">
        <v-alert type="success" elevation="10"
          >Commande crée! Vous allez etre rédirigé vers l'accueil</v-alert
        >
        <v-progress-linear indeterminate color="cyan"></v-progress-linear>
        {{ redirectToMenu() }}
      </div>
      <Error :error="error" />
    </v-form>
  </v-row>
</template>

<script>
import store from "@/store/index.js";
export default {
  name: "FormCommand",
  store: store,
  data() {
    return {
      valid: false,
      rules: {
        required: (value) => !!value || "Requis",
        email: (value) => {
          const pattern = /.+@.+\..+/;
          return pattern.test(value) || "Invalid e-mail";
        },
      },
      select: null,
      user: {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
      },
      error: [],
      success: false,
    };
  },
  methods: {
    total() {
      var total = 0;
      var totalItem = 0;
      this.order.forEach(function (product) {
        total += product.price;
      });
      return total.toFixed(2);
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    createCommand() {
      store
        .dispatch("postUser", this.user)
        .then(() =>
          store
            .dispatch("postOrder", this.total())
            .catch((error) => {
              this.error = error.response;
            })
            .then(() => (this.success = true))
        )
        .catch((error) => {
          this.error = error.response;
        });
    },
    redirectToMenu() {
      setTimeout(() => {
        this.resetOrder();
        this.$router.push({ name: "Home" });
      }, 2000);
    },
    resetOrder() {
      store.commit("setOrder", []);
    },
  },
  computed: {
    getuser() {
      return store.state.user;
    },
    order() {
      return store.state.order;
    },
  },
};
</script>