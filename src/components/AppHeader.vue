<template>
  <div id="app_header">
    <div class="info">
      <div class="endurance">
        <div class="score">22/22</div>
        <div class="endurance_icon">
          <img src="../assets/endurance.png" />
        </div>
      </div>
      <div class="fatigue">
        <div class="fatigue_icon">
          <img src="../assets/bolt.png" />
        </div>
        <div class="fatigue_score">12</div>
      </div>
    </div>
    <div class="center">
      <div class="title">Alantariel</div>
      <div class="subtitle">altos elfos de valfenda</div>
      <div class="subtitle">andarilho</div>
      <div class="lock">
        <img src="../assets/lock.png" />
      </div>
    </div>
    <div class="info">
      <div class="hope">
        <div class="hope_score">08/08</div>
        <div class="hope_icon">
          <img src="../assets/hope.png" />
        </div>
      </div>
      <div class="shadow">
        <div class="shadow_icon">
          <img src="../assets/shadow.png" />
        </div>
        <div class="shadow_score">12</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
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
}

.lock img {
  --size: 2rem;
  width: var(--size);
  height: var(--size);
}

.title {
  font-size: 1.4rem;
}

.subtitle {
  opacity: 0.6;
}

.info {
  display: flex;
  flex-flow: column;
  row-gap: 0.4rem;
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
.shadow_score {
  --size: 1.8rem;
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
