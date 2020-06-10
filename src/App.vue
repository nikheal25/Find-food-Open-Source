<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/Job_Board">Job Board</v-btn>
        <v-btn text to="/about">About</v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn text to="/register">Register</v-btn>
      <v-btn text to="/login">Log In</v-btn>
    </v-app-bar>

    <v-content>
      <!-- <HelloWorld/> -->
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  })
};
</script>
