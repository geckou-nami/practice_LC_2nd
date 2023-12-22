<script setup lang="ts">
const isActive = ref(false);
</script>

<template>
  <div :class="$style.global_nav_container">
    <div :class="$style.frame" />
    <img :class="$style.frame_logo" src="~/assets/images/mainlogo.png" alt="日本ライブコマース協会">
    <div :class="[$style.hamburger_circle, isActive ? $style.active : '']" >
      <GlobalNavButton
        :class="$style.nav_button"
        @emitEvent="(state) => isActive = state"
      />
    </div>
    <a :class="$style.sns_icon">
      <IconTwitter />
    </a>
    <a :class="$style.sns_icon">
      <IconNote />
    </a>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.global_nav_container {
  width   : 100vw;
  height  : 100vh;
  position: relative;
}

.frame {
  width        : calc(100% - (var(--bv) * 16));
  height       : calc(100% - (var(--bv) * 16));
  border       : var(--border-size) solid var(--white);
  border-radius: var(--border-radius-base);
  position     : fixed;
  top          : calc(var(--bv) * 8);
  left         : calc(var(--bv) * 8);
  z-index      : var(--z-index-nav);
  pointer-events: none;

    @include mediaScreen('tablet') {
      width : calc(100% - (var(--bv) * 6));
      height: calc(100% - (var(--bv) * 6));
      top   : calc(var(--bv) * 3);
      left  : calc(var(--bv) * 3);
  }
}

.frame_logo {
  width   : 420px;
  height  : 90px;
  position: fixed;
  top     : calc(var(--bv) * 12);
  left    : calc(var(--bv) * 12);
  z-index : var(--z-index-nav);

  @include mediaScreen('tablet') {
    width : 200px;
    height: 45px;
  }
}

.nav_button {
  width:100%;
  height:100%;
  position      : fixed;
  top           : calc(var(--bv) * 13.5);
  right         : calc(var(--bv) * 13.5);
  z-index       : var(--z-index-tooltip);

  @include mediaScreen('tablet') {
    top  : calc(var(--bv) * 6);
    right: calc(var(--bv) * 6);
  }
}

.hamburger_circle {
  position        : fixed;
  top             : calc(var(--bv) * 13);
  right           : calc(var(--bv) * 13);
  width           : calc(var(--bv) * 8);
  height          : calc(var(--bv) * 8);
  aspect-ratio    : 1;
  border-radius   : 50%;
  background-color: var(--white);
  transition      : all .5s;
  display         : flex;
  justify-content : center;
  align-items     : center;

  &.active {
    top             : calc(var(--bv) * 8);
    right           : calc(var(--bv) * 8);
    width           : calc(100% - (var(--bv) * 16));
    height          : calc(100% - (var(--bv) * 16));
    background-color: var(--transparent-white);
    border-radius: var(--border-radius-base);
    transform-origin: right top;
  }

  @include mediaScreen('tablet') {
    width : 50px;
    height: 50px;
  }
}

.sns_icon {
  width          : 48px;
  height         : 48px;
  border-radius  : 50%;
  background     : var(--button-gradient);
  backdrop-filter: blur(2px);
  display        : flex;
  justify-content: center;
  align-items    : center;
  cursor: pointer;
  position      : fixed;
  top           : calc(var(--bv) * 23);
  right         : calc(var(--bv) * 13);
  z-index       : var(--z-index-tooltip);

  &:nth-child(2) {
    top: calc(var(--bv) * 33);
  }

  @include mediaScreen('tablet') {
    width : 38px;
    height: 38px;
    gap  : var(--sp-small);
    right: calc(var(--bv) * 6);
  }
}
</style>