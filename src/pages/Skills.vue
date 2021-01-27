<template>
  <div id="skills">
    <div class="attributes">
      <div class="attribute" v-for="(attribute, index) in attributes" :key="index">
        <div class="label">{{ attribute.name }}</div>
        <div class="score">{{ padScore(attribute.score) }}/{{ padScore(attribute.favouredScore) }}</div>
      </div>
    </div>
    <div class="skill_list">
      <skill-counter v-for="(skill, index) in skills" :key="index" :skill="skill" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
import SkillCounter from "../components/SkillCounter"
export default {
  components: {
    SkillCounter,
  },
  setup() {
    const store = useStore()

    const attributes = computed(() => store.state.character.attributes)
    const padScore = score => String(score).padStart(2, "0")

    const skills = store.state.character.skills.sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      return 0
    })

    return { skills, attributes, padScore }
  },
}
</script>

<style scoped>
#skills {
  height: 100%;
  display: flex;
  flex-flow: column;
  row-gap: 3rem;
}

.skill_list {
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-flow: column;
  row-gap: 1.4rem;
}

.attributes {
  display: flex;
  justify-content: space-around;
}

.attribute {
  display: flex;
  flex-flow: column;
  align-items: center;
  text-transform: uppercase;
}

.label {
  border-bottom: 1px solid var(--gray-dark);
}

.score {
  font-size: 1.2rem;
  opacity: 0.6;
}
</style>
