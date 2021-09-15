<template>
  <v-toolbar dark class="pro_head fixed-bar">
    <h1 @click="routerToHome()">Notfallapp</h1>
    <v-spacer></v-spacer>

    <div>
      <v-btn class="btn_toolbar">
        Login
      </v-btn>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {};
  },
  methods: {
    routerToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/colors/colors.scss";

.fixed-bar {
  position: sticky;
  max-height: 7%;
  top: 0em;
  z-index: 2;
}
.btn_toolbar {
  transition: 0.5s !important;
  background-size: 200% auto !important;
  color: $main_color !important;
  border-radius: 10px !important;
  background-image: $btn_bg;
}
.btn_toolbar:hover {
  background-position: right center !important; /* change the direction of the change here */
  color: $main_color !important;
  text-decoration: none !important;
}
</style>
