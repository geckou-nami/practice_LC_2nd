<script setup lang="ts">
const isActive = ref(false);

const toggleMenu = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <div :class="$style.global_nav_container">
    <div :class="$style.hamburger_circle">
      <button :class="[$style.hamburger_menu, isActive ? $style.active : '']"
              @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" module>
.hamburger_circle {
  width:64px;
  height:64px;
  border-radius: 50%;
  background-color: var(--white);
  display:flex;
  justify-content: center;
  align-items: center;
}

.hamburger_menu {
  --opacity   : 1;
  --rotate    : 0;
  --translate : .5rem;
  display     : grid;
  place-items : center;
  width       : 50px;
  aspect-ratio: 1;
  cursor      : pointer;

  &.active {
    --opacity  : 0;
    --rotate   : 135deg;
    --translate: 0;
  }

  span {
    display         : block;
    width           : 60%;
    height          : 3px;
    border-radius   : 10px;
    background-color: var(--pink);
    grid-area       : 1/1/-1/-1;
    
    &:nth-child(1) {
      opacity: var(--opacity);
    }
    &:nth-child(2) {
      translate: 0 calc(var(--translate) * -1);
      rotate   : var(--rotate);
    }
    &:nth-child(3) {
      translate: 0 var(--translate);
      rotate   : calc(var(--rotate) * -1);
    }
  }
}
</style>