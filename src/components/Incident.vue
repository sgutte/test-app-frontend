<template>
  <v-container>
    <div>
      <v-row>
        <v-col cols="12" sm="10" md="8" lg="6">
          <v-card ref="form">
            <v-card-text>
              <v-text-field
                ref="injuredPerson"
                v-model="injuredPerson"
                :rules="[() => !!injuredPerson || 'Diese Feld wird benötigt']"
                label="Name der Verletzten Person"
                required
              >
              </v-text-field>
              <v-autocomplete
                ref="address"
                v-model="constructionSite"
                :rules="[
                  () => !!constructionSite || 'Diese Feld wird benötigt',
                ]"
                label="Baustelle"
                placeholder="Wählen Sie..."
                required
              >
              </v-autocomplete>
              <v-autocomplete
                ref="injury"
                v-model="injury"
                :items="injuries"
                :rules="[() => !!injury || 'Diese Feld wird benötigt']"
                label="Art der Verletzung"
                required
              >
              </v-autocomplete>
              <v-autocomplete
                ref="state"
                v-model="state"
                :items="states"
                :rules="[() => !!state || 'Diese Feld wird benötigt']"
                label="Intensität der Verletzung"
                required
              ></v-autocomplete>
              <v-text-field
                ref="firstAidMeasures"
                v-model="firstAidMeasures"
                :rules="[
                  () => !!firstAidMeasures || 'Diese Feld wird benötigt',
                ]"
                label="Eingeleitete Hilfe Maßnahmen"
                required
              >
              </v-text-field>
              <v-text-field
                ref="date"
                v-model="today"
                label="Datum des Unfalls"
                disabled
              >
              </v-text-field>
              <v-text-field
                ref="reportingPerson"
                v-model="reportingPerson"
                :rules="[() => !!reportingPerson || 'Diese Feld wird benötigt']"
                label="Name der meldenden Person"
                required
              ></v-text-field>
              <v-card-actions>
                <v-btn text>
                  Zurück
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn class="btn_home" text @click="test">
                  Absenden
                </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import moment from "moment";
//import axios from "axios";

export default {
  name: "Incident",

  data: () => ({
    injuredPerson: null,
    constructionSites: [],
    constructionSite: null,
    injuries: ["Knochenbruch", "Schnitt", "Quetschung"],
    injury: null,
    states: ["Leicht", "Schwer", "Lebensgefährlich"],
    state: null,
    reportingPerson: null,
    firstAidMeasures: null,
    today: moment().format("DD-MM-YYYY HH:mm:ss"),
  }),
  methods: {
    moment: function() {
      return moment();
    },
    submit() {
      this.formHasErrors = false;
      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;
        this.$refs[f].validate(true);
      });
    },
    test(worker) {
      this.$store.dispatch("setWorker", worker);
      console.log(worker.injuredPerson);
      //axios.post("localhost:4200/api/workers");
    },
  },
  computed: {
    form() {
      return {
        injuredPerson: this.injuredPerson,
        constructionSite: this.constructionSite,
        city: this.city,
        injury: this.injury,
        state: this.state,
        reportingPerson: this.reportingPerson,
        today: this.today,
      };
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
