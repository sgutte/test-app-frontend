export const actions = {
  setIncident(context, incident) {
    context.commit('INCIDENT', incident)
  },
  setConstructionSites(context, constructionSites) {
    context.commit('CONSTRUCTIONSITES', constructionSites)
  },
  setIncidents(context, incidents) {
    context.commit('INCIDENTS', incidents)
  },
  setWorkers(context, workers) {
    context.commit('WORKERS', workers)
  }
}