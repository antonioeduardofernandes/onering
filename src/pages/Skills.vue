<template>
  <div id="skills">
    <div class="skill_list">
      <skill-counter v-for="(skill, index) in skills" :key="index" :skill="skill" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex"
import SkillCounter from "../components/SkillCounter"
export default {
  components: {
    SkillCounter,
  },
  setup() {
    const store = useStore()
    const skills = store.state.character.skills.sort((a, b) => {
      if (a.name > b.name) return 1
      if (a.name < b.name) return -1
      return 0
    })
    return { skills }
  },
}
</script>

<style scoped>
#skills {
  height: 100%;
  display: flex;
  flex-flow: column;
}

.skill_list {
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-flow: column;
  row-gap: 1rem;
  padding: 1rem;
}
</style>
