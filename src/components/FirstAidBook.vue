<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h3>{{ $t("firstAidBook.header") }}</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="this.$store.getters.getIncidents"
          :search="search"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:top>
            <v-text-field
              v-model="search"
              class="mx-4"
              :label="searchLabel"
            ></v-text-field>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "FirstAidBook",

  data() {
    return {
      searchLabel: this.$t("firstAidBook.table.search"),
      headers: [
        {
          text: this.$t("firstAidBook.table.header.constructionSite"),
          align: "start",
          sortable: true,
          value: "constructionSite.city",
        },
        {
          text: this.$t("firstAidBook.table.header.date"),
          align: "start",
          sortable: true,
          value: "date",
        },
        {
          text: this.$t("firstAidBook.table.header.injuredPerson"),
          align: "start",
          sortable: true,
          value: "worker.firstName",
        },
        {
          text: this.$t("firstAidBook.table.header.injury"),
          align: "start",
          sortable: true,
          value: "injury",
        },
        {
          text: this.$t("firstAidBook.table.header.state"),
          align: "start",
          sortable: true,
          value: "state",
        },
      ],
      incidents: [],
      search: "",
    };
  },
  methods: {
    testMeth() {
      axios
        .get(
          "https://dev78849.service-now.com/api/now/table/u_emergency_incidents?sysparm_query=active%3Dtrue&sysparm_display_value=true&sysparm_fields=u_reported_by%2Copened_at%2Cu_injured%2Cu_first_aid_measures%2Cu_construction_site%2Cu_injury&sysparm_limit=1",
          {
            params: this.axiosParams,
          }
        )
        .then((response) => console.log(response));
    },
  },
  computed: {
    axiosParams() {
      const params = new URLSearchParams();
      params.append("USERNAME", "admin");
      params.append("PASSWORD", "admin");
      return params;
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/incident")
      .then(
        (response) => (
          this.$store.dispatch("setIncidents", response.data),
          console.log(this.incidents)
        )
      );
  },
};
</script>
