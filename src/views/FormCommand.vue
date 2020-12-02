<template>
  <v-row align="center" justify="center">
    <v-form ref="form" v-model="valid" lazy-validation  style="min-width: 300px; width: 40vw;">
      <v-text-field
        v-model="firstName"
        :rules="[rules.required]"
        label="first name"
        required
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        :rules="[rules.required]"
        label="last name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="[rules.required, rules.email]"
        label="E-mail"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-btn large class="ma-5" color="white" elevation="2">annuler</v-btn>
      <v-btn
        style="color: white"
        large
        class="ma-5"
        color="#32374B"
        elevation="2"
        :disabled="!valid"
        @click="submit"
        >commander</v-btn
      >
    </v-form>
  </v-row>
</template>

<script>
export default {
  name: "FormCommand",
  data() {
    return {
      valid: false,
      rules: {
        required: value => !!value || "Requis",
        email: value => {
          const pattern = /.+@.+\..+/;
          return pattern.test(value) || "Invalid e-mail";
        },
      },
      lastName: "",
      firstName: "",
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
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
  },
};
</script>