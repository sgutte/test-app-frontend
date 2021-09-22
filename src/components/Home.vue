<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <v-btn class="btn_home" @click="routeIncident()">{{
          $t("home.incidentButton")
        }}</v-btn>
      </v-col>
      <v-col
        ><v-btn class="btn2" @click="routeFirstAidBook()">{{
          $t("home.firstAidButton")
        }}</v-btn></v-col
      >
      <v-col cols="12">
        <v-img src="../assets/logo.png" class="mt-3 logo" alt="Logo der VCC" />
      </v-col>
      <v-col>
        <h1>{{ $t("home.homeText") }}</h1>
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
    routeFirstAidBook() {
      this.$router.push("/firstAidBook");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/colors/colors.scss";

.logo {
  height: 100%;
  width: 100%;
}

.btn_home {
  color: $main_color !important;
  background-image: $btn_bg !important;
}

.btn2 {
  color: $main_color !important;
  background-image: $btn2_bg;
}
</style>
