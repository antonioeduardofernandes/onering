<template>
  <div id="skill_counter">
    <div class="title">
      <div class="name">{{ skill.name }}</div>
      <svg v-if="skill.favoured" class="star" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </div>
    <div class="score_container">
      <div class="score" :class="{ score_checked: skill.score > 0 }" />
      <div class="score" :class="{ score_checked: skill.score > 1 }" />
      <div class="score" :class="{ score_checked: skill.score > 2 }" />
      <div class="score" :class="{ score_checked: skill.score > 3 }" />
      <div class="score" :class="{ score_checked: skill.score > 4 }" />
      <div class="score" :class="{ score_checked: skill.score > 5 }" />
    </div>
    <div class="advancement">
      <div class="advancement_counter" :class="{ advancement_checked: advancementScore > 0 }" />
      <div class="advancement_counter" :class="{ advancement_checked: advancementScore > 1 }" />
      <div class="advancement_counter" :class="{ advancement_checked: advancementScore > 2 }" />
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue"
import { useStore } from "vuex"
export default {
  props: {
    skill: Object,
  },
  setup(props) {
    const store = useStore()

    const skillGroups = ref([
      { name: "personalidade", skills: ["assombro", "inspiração", "persuasão"] },
      { name: "movimento", skills: ["atletismo", "viagem", "furtividade"] },
      { name: "percepção", skills: ["atenção", "intuição", "investigação"] },
      { name: "sobrevivência", skills: ["exploração", "cura", "caça"] },
      { name: "costumes", skills: ["cantigas", "cortesia", "enigmas"] },
      { name: "ocupação", skills: ["ofício", "batalha", "conhecimento"] },
    ])

    const advancementScore = computed(() => {
      const group = skillGroups.value.find(group => group.skills.includes(props.skill.name))
      return store.state.character.advancementPoints.find(g => g.name === group.name).score
    })

    return { skillGroups, advancementScore }
  },
}
</script>

<style scoped>
#skill_counter {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.title {
  display: flex;
  column-gap: 0.4rem;
  text-transform: uppercase;
}

.star {
  --size: 16px;
  height: var(--size);
  width: var(--size);
  fill: var(--gold);
}

.score_container {
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
}

.score {
  --size: 10px;
  width: var(--size);
  height: var(--size);
  background-color: var(--gray-dark);
  border-radius: 50%;
}

.score_checked {
  background-color: var(--green);
  border: 1px solid var(--white);
}

.advancement {
  display: flex;
  align-items: center;
  justify-self: flex-end;
}

.advancement_counter {
  width: 20px;
  height: 10px;
  background-color: var(--blue);
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  opacity: 0.15;
}

.advancement_checked {
  opacity: 1;
}
</style>
