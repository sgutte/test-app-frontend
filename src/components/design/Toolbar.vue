<template>
  <v-toolbar dark class="pro_head fixed-bar">
    <h1 @click="routerToHome()">{{ $t("toolbar.header") }}</h1>
    <v-spacer></v-spacer>
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option v-for="item in langs" :key="item.id">
          <v-img :src="item.img" class="img" />
          <img src="item.img" />
          <p>{{ item.lang }}</p>
        </option>
      </select>
    </div>
    <div>
      <v-btn class="btn_toolbar">
        {{ $t("toolbar.loginButton") }}
      </v-btn>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
      langs: [
        { id: 1, lang: "de", img: require("@/assets/de.png") },
        { id: 2, lang: "en", img: require("@/assets/en.png") },
        { id: 3, lang: "pl", img: require("@/assets/pl.png") },
      ],
    };
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

.img {
  width: 30px;
  align-items: center;
  margin: auto !important;
}
</style>
