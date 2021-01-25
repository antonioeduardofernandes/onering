<template>
  <div id="app_header">
    <div class="info">
      <div class="endurance">
        <div class="score">{{ character.endurance.current }}/{{ character.endurance.max }}</div>
        <div class="endurance_icon">
          <img src="../../assets/endurance.png" />
        </div>
      </div>
      <div class="fatigue">
        <div class="fatigue_icon">
          <img src="../../assets/bolt.png" />
        </div>
        <div class="fatigue_score">{{ character.fatigue }}</div>
      </div>
    </div>
    <div class="center">
      <div class="title">{{ character.name }}</div>
      <div class="subtitle">{{ character.culture }}</div>
      <div class="subtitle">{{ character.calling }}</div>
      <div class="lock">
        <img src="../../assets/lock.png" @click="lockScreen" />
      </div>
      <teleport to="body">
        <div class="screen_blocker" />
      </teleport>
    </div>
    <div class="info">
      <div class="hope">
        <div class="hope_score">{{ character.hope.current }}/{{ character.hope.max }}</div>
        <div class="hope_icon">
          <img src="../../assets/hope.png" />
        </div>
        <div class="fellowship_score">{{ character.fellowship.current }}</div>
      </div>
      <div class="shadow">
        <div class="shadow_icon">
          <img src="../../assets/shadow.png" />
        </div>
        <div class="shadow_score">{{ character.shadow.current }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap"
import { computed, ref } from "vue"
import { useStore } from "vuex"
export default {
  setup() {
    const store = useStore()
    const character = computed(() => store.state.character)

    const locked = ref(false)
    const lockScreen = () => {
      if (!locked.value) {
        gsap.to(".lock", { duration: 0.2, opacity: 1 })
        gsap.to(".screen_blocker", { duration: 0.2, opacity: 0.8, pointerEvents: "all" })
        return (locked.value = !locked.value)
      }
      gsap.to(".lock", { duration: 0.2, opacity: 0.2 })
      gsap.to(".screen_blocker", { duration: 0.2, opacity: 0, pointerEvents: "none" })
      return (locked.value = !locked.value)
    }

    return {
      character,
      locked,
      lockScreen,
    }
  },
}
</script>

<style scoped>
#app_header {
  margin-top: 1rem;
  display: flex;
  width: 100vw;
  justify-content: space-around;
}

.center {
  display: flex;
  flex-flow: column;
  align-items: center;
  text-transform: capitalize;
  margin-top: 0.6rem;
}

.lock {
  --size: 2.6rem;
  margin-top: 1rem;
  width: var(--size);
  height: var(--size);
  border: 0.18rem solid var(--gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.2;
  z-index: 1000;
}

.lock img {
  --size: 2rem;
  width: var(--size);
  height: var(--size);
}

.screen_blocker {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
  background-color: var(--bg);
  opacity: 0;
  pointer-events: none;
}

.title {
  font-size: 1.4rem;
}

.subtitle {
  opacity: 0.6;
}

.info {
  font-weight: bold;
  display: flex;
  flex-flow: column;
  row-gap: 0.6rem;
}

.endurance,
.hope {
  display: flex;
  flex-flow: column;
  align-items: center;
  row-gap: 0.4rem;
}

.endurance_icon,
.hope_icon {
  --size: 3.4rem;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 0.24rem solid var(--green);
}

.fatigue,
.shadow {
  align-self: flex-end;
  position: relative;
}

.fatigue_icon,
.shadow_icon {
  --size: 2.4rem;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 0.16rem solid var(--orange);
}

.fatigue_score,
.shadow_score,
.fellowship_score {
  --size: 1.6rem;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--bg);
  border: 0.1rem solid var(--white);
  font-size: 0.9rem;
  position: absolute;
  right: -10px;
  bottom: -16px;
}

.hope {
  position: relative;
}

.hope_icon {
  border-color: var(--white);
}

.fellowship_score {
  bottom: -0.6rem;
}

.shadow {
  align-self: flex-start;
}

.shadow_icon {
  border-color: var(--red);
}

.shadow_score {
  left: -10px;
}
</style>
