<script setup lang="ts">
type Props = {
  text: string
  isCurrent: boolean
}

const props = defineProps<Props>()

</script>

<template>
  <div :class="[$style.heading, isCurrent ? $style.display : '']">
    <h2>
      {{ text }}
    </h2>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.heading {
  display        : flex;
  justify-content: center;
  align-items    : center;
  width          : 100%;
  height         : 100%;
  position       : fixed;
  top            : 0;
  left           : 0;
  opacity        : 0;
  filter         : blur(200px);
  transition     : all .6s;

  @include mediaScreen('mobile') {
    left: -8em;
  }

    > h2 {
      color         : rgba(255, 255, 255, .1);
      font-size     : var(--fs-heading);
      font-weight   : 500;
      font-family   : var(--font-family-rounded);
      letter-spacing: var(--letter-spacing-narrow);
      transform     : rotate(-12deg);

      @include mediaScreen('mobile') {
        transform: rotate(90deg);
      }
    }
  
  &.display {
    filter : blur(0px);
    opacity: 1;
  }
}
</style>