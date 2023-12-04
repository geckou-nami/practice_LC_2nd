<template>
  <div :class="$style.global_nav">
    <div :class="$style.frame" />
  </div>
</template>

<style lang="scss" module>
.global_nav {
  width   : 100dvw;
  height  : 100dvh;
  padding : var(--border-margin);
  position: fixed;
  top     : 0;
  z-index : var(--z-index-nav);
}
.frame {
  width        : 100%;
  height       : 100%;
  border       : var(--border-size) solid var(--white);
  border-radius: var(--border-radius-base);
}
</style>