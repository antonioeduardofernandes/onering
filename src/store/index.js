import { createStore } from "vuex"

export default createStore({
  state: {
    character: {
      name: "alantariel",
      culture: "altos elfos de valfenda",
      calling: "andarilho",
      living: "próspero",
      treasure: 2,
      traits: ["exploração de túneis", "conhecimento das sombras", "comércio", "astuto", "justo"],
      skills: [
        { name: "assombro", score: 0 },
        { name: "atletismo", score: 0 },
        { name: "atenção", score: 0 },
        { name: "exploração", score: 2 },
        { name: "cantigas", score: 1 },
        { name: "ofício", score: 3, favoured: true },
        { name: "inspiração", score: 2 },
        { name: "viagem", score: 3 },
        { name: "intuição", score: 0 },
        { name: "cura", score: 0 },
        { name: "cortesia", score: 0 },
        { name: "batalha", score: 1 },
        { name: "persuasão", score: 0 },
        { name: "furtividade", score: 0 },
        { name: "investigação", score: 3 },
        { name: "caça", score: 0 },
        { name: "enigmas", score: 2 },
        { name: "conhecimento", score: 0 },
      ],
      attributes: [
        { name: "corpo", score: 6, favouredScore: 8 },
        { name: "coração", score: 4, favouredScore: 7 },
        { name: "esperteza", score: 4, favouredScore: 5 },
      ],
      endurance: { current: 20, max: 20 },
      fatigue: 10,
      fellowship: { current: 4, max: 4 },
      hope: { current: 8, max: 8 },
      shadow: { current: 0, permanent: 0 },
      advancementPoints: [
        { name: "personalidade", score: 0 },
        { name: "movimento", score: 0 },
        { name: "percepção", score: 0 },
        { name: "sobrevivência", score: 0 },
        { name: "costumes", score: 0 },
        { name: "ocupação", score: 0 },
      ],
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})
