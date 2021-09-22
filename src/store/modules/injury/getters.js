export const getters = {
  getIncident: state => {
    return state.incident;
  },
  getConstructionSites: state => {
    return state.constructionSites
  },
  getIncidents: state => {
    return state.incidents
  },
  getWorkers: state => {
    return state.workers
  }
}