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
    const skills = store.state.character.skills
    return { skills }
  },
}
</script>

<style scoped>
#skills {
  display: flex;
  flex-flow: column;
  height: 100%;
  overflow-y: hidden;
}

.skill_list {
  height: 100%;
  display: flex;
  flex-flow: column;
  row-gap: 1rem;
  overflow-y: scroll;
}
</style>
