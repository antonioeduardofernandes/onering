<template>
  <div id="skills">
    <div class="skill_list">
      <div class="skill" v-for="(skill, index) in skills" :key="index">{{ skill.name }}</div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex"
export default {
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
}
</style>
