<template>
  <div id="inventory">
    <div class="top">
      <div class="living">
        <img src="../assets/inventory/coin.png" class="coin" />
        <div>{{ living }}</div>
      </div>
      <div class="treasure">
        <img src="../assets/inventory/crown.png" class="treasure_icon" />
        <div>{{ String(treasure).padStart(2, "0") }}</div>
      </div>
    </div>

    <div class="container">
      <div class="header">
        <div class="icons">
          <img src="../assets/inventory/header/box.png" />
          <img src="../assets/inventory/header/sword.png" />
          <img src="../assets/inventory/header/shield.png" />
          <img src="../assets/inventory/header/crown.png" />
        </div>
        <div class="encumbrance">
          <img src="../assets/inventory/header/chest.png" />
          <div class="score">12</div>
        </div>
      </div>

      <div class="item_list">
        <div class="item">
          <div>espada curta</div>
          <img src="../assets/inventory/header/sword.png" />
          <div class="equiped">EQUIPADO</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "vuex"
export default {
  setup() {
    const store = useStore()
    const treasure = computed(() => store.state.character.treasure)
    const living = computed(() => store.state.character.living)

    return { treasure, living }
  },
}
</script>

<style scoped>
#inventory {
  display: flex;
  flex-flow: column;
  row-gap: 3rem;
}

.top {
  display: flex;
  flex-flow: column;
}

.living,
.treasure {
  display: flex;
  align-self: center;
  align-items: center;
  text-transform: uppercase;
  column-gap: 0.3rem;
}

img {
  --size: 20px;
  height: var(--size);
  width: var(--size);
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray-dark);
  padding-bottom: 1rem;
}

.header .icons {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

.encumbrance {
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
}

.item_list {
  display: flex;
  flex-flow: column;
  padding: 1rem 0;
}

.item {
  display: flex;
  align-items: center;
  column-gap: 1rem;
  text-transform: uppercase;
}

.equiped {
  background-color: var(--green);
  border-radius: 10px;
  padding: 0 1rem;
  font-size: 0.9rem;
}
</style>
