<template>
  <div :class="$style.section_container">
    <slot />
  </div>
</template>

<style lang="scss" module>
.section_container {
  width  : 100%;
  padding: calc(var(--sp-large) * 6) calc(var( --border-margin) * 2);
  margin: 0 auto;
}
</style>