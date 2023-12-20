<script setup lang="ts">
const isActive = ref(false);

const toggleMenu = () => {
  isActive.value = !isActive.value;
  console.log(isActive.value);
}
</script>

<template>
  <div :class="$style.global_nav_container">
    <div :class="[$style.hamburger_circle, isActive ? $style.active : '']" />
    <button 
      :class="[$style.hamburger_menu, isActive ? $style.active : '']"
      @click="toggleMenu"
    >
    {{ isActive }}
      <span></span> 
      <span></span>
      <span></span>
    </button>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.global_nav_container {
  display        : flex;
  justify-content: center;
  align-items    : center;
  position       : relative;
}

.hamburger_circle {
  width              : calc(var(--bv) * 8);
  height             : calc(var(--bv) * 8);
  aspect-ratio       : 1;
  border-radius      : 50%;
  background-color   : var(--white);
  animation-name     : GlobalNavClose;
  animation-duration : 0.4s;
  animation-fill-mode: forwards;

  &.active {
    background-color         : var(--transparent-white);
    animation-name           : GlobalNavOpen;
    animation-duration       : 0.8s;
    animation-fill-mode      : forwards;
    animation-timing-function: ease-in-out;
  }

  @include mediaScreen('tablet') {
    width : 50px;
    height: 50px;
  }
}
.hamburger_menu {
  position: absolute;
  --opacity   : 1;
  --rotate    : 0;
  --translate : .5rem;
  display     : grid;
  place-items : center;
  width       : 50px;
  aspect-ratio: 1;
  cursor      : pointer;

  @include mediaScreen('tablet') {
    width : 40px;
  }

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

@keyframes GlobalNavOpen {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(100);
  }
}
@keyframes GlobalNavClose {
  0% {
    transform: scale(100);
  }
  100% {
    transform: scale(1);
  }
}
</style>