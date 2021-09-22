<template>
  <v-container>
    <div>
      <v-row>
        <v-col cols="12" sm="10" md="8" lg="6">
          <v-card class="card">
            <v-card-text>
              <v-autocomplete
                ref="workerId"
                v-model="incident.worker.workerId"
                :items="this.$store.getters.getWorkers"
                item-text="lastName"
                item-value="workerId"
                :rules="rules"
                :label="this.$t('incident.injuredPersonLabel')"
                return="workerId"
                required
              >
              </v-autocomplete>
              <v-autocomplete
                ref="constructionSiteId"
                v-model="incident.constructionSite.id"
                :items="this.$store.getters.getConstructionSites"
                item-text="city"
                item-value="id"
                :rules="rules"
                :label="this.$t('incident.constructionSiteLabel')"
                return="id"
                required
              >
              </v-autocomplete>
              <v-autocomplete
                ref="injury"
                v-model="incident.injury"
                :items="$t('injuries')"
                :rules="rules"
                :label="this.$t('incident.injuryLabel')"
                required
              >
              </v-autocomplete>
              <v-autocomplete
                ref="state"
                v-model="incident.state"
                :items="$t('states')"
                :rules="rules"
                :label="this.$t('incident.stateLabel')"
                required
              ></v-autocomplete>
              <v-text-field
                ref="firstAidMeasures"
                v-model="incident.firstAidMeasures"
                :rules="rules"
                :label="this.$t('incident.firstAidMeasuresLabel')"
                required
              >
              </v-text-field>
              <v-text-field
                ref="date"
                v-model="incident.date"
                :label="this.$t('incident.todayLabel')"
                disabled
              >
              </v-text-field>
              <v-autocomplete
                ref="reportingPerson"
                v-model="incident.reportingPerson.workerId"
                :items="this.$store.getters.getWorkers"
                item-text="lastName"
                item-value="workerId"
                :rules="rules"
                :label="this.$t('incident.reportingPersonLabel')"
                return="workerId"
                required
              >
              </v-autocomplete>
              <v-card-actions>
                <v-btn text @click="routeBack">
                  {{ $t("incident.cancelButton") }}
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn class="btn_home" @click="submit">
                  {{ $t("incident.submitButton") }}
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
import axios from "axios";

export default {
  name: "Incident",

  data: () => ({
    incident: {
      worker: {
        workerId: "",
      },
      constructionSite: {
        id: "",
      },
      injury: "",
      state: "",
      reportingPerson: {
        workerId: "",
      },
      firstAidMeasures: "",
      date: moment().format("DD-MM-YYYY HH:mm:ss"),
    },
    inciNow: {
      u_injured: null,
      u_injury: null,
      u_first_aid_measures: null,
      u_reported_by: null,
      u_construction_site: null,
    },
    rules: [(v) => !!v || "Required!"],
    url: "http://localhost:8080/api/incident",
  }),
  methods: {
    moment: function() {
      return moment();
    },
    validate() {
      this.$refs.form.validate();
    },
    routeBack() {
      this.$router.push("/");
    },

    submit() {
      this.$store.dispatch("setIncident", this.incident);
      console.log(this.incident),
        axios
          .post(this.url, this.$store.getters.getIncident)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      /* .post(
          "https://dev78849.service-now.com/api/now/import/u_inbound_emergency_incidents",
          this.$store.getters.getIncident,
          {
            auth: {
              username: "admin",
              password: "admin",
            },
          }
        ) */
    },
  },

  computed: {},
  mounted() {
    axios
      .get("http://localhost:8080/api/constructionSite")
      .then(
        (response) => (
          this.$store.dispatch("setConstructionSites", response.data),
          (this.test = this.$store.getters.getConstructionSites),
          console.log(this.test)
        )
      );
    axios
      .get("http://localhost:8080/api/worker")
      .then((response) => this.$store.dispatch("setWorkers", response.data));
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/colors/colors.scss";

.card {
  text-align: center !important;
}

.btn_home {
  color: $main_color !important;
  background-image: $btn_bg !important;
}
</style>
