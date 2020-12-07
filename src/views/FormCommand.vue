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
          @click="createCommand()"
          >commander</v-btn
        >

        <Error />
      </center>
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
        firstName: "firstName",
        lastName: "lastName",
        email: "email@gmail.com",
        address: "214 rue de la cheval",
      },
      store: "",
    };
  },
  methods: {
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
        .then(() => store.dispatch("postOrder", "12"));
    },
  },
  computed: {
    getuser() {
      return store.state.user;
    },
  },
};
</script>