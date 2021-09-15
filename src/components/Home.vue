<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <v-btn class="btn_home" @click="routeIncident()">Unfall melden!</v-btn>
      </v-col>
      <v-col cols="12">
        <router-link to="/">
          <img
            src="../assets/logo.png"
            width="100%"
            height="100%"
            class="mt-3"
          />
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({}),
  methods: {
    routeIncident() {
      this.$router.push("/incident");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/colors/colors.scss";

.btn_home {
  color: $main_color !important;
  background-image: $btn_bg !important;
}
</style>
