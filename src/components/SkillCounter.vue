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
    <div class="advancement"></div>
  </div>
</template>

<script>
export default {
  props: {
    skill: Object,
  },
}
</script>

<style scoped>
#skill_counter {
  display: grid;
  grid-template-columns: 140px 1fr 1fr;
}

.title {
  display: flex;
  column-gap: 0.4rem;
}

.star {
  --size: 16px;
  height: var(--size);
  width: var(--size);
  fill: var(--gold);
}

.name {
  text-transform: uppercase;
}

.score_container {
  display: flex;
  align-items: center;
  column-gap: 0.6rem;
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
</style>
