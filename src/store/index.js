import { createStore } from "vuex"

export default createStore({
  state: {
    character: {
      name: "alantariel",
      culture: "altos elfos de valfenda",
      calling: "andarilho",
      traits: ["exploração de túneis", "conhecimento das sombras", "comércio", "astuto", "justo"],
      endurance: { current: 20, max: 20 },
      fatigue: 10,
      fellowship: { current: 4, max: 4 },
      hope: { current: 8, max: 8 },
      shadow: { current: 0, permanent: 0 },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})
