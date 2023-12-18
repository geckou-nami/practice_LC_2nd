<script setup lang="ts">
type Props = {
  sectionName: string,
}

const props = defineProps<Props>()
</script>

<template>
  <section>
    <SectionHeading
      v-if="sectionName"
      :text="sectionName"
      />
    <div :class="$style.section_container">
      <slot />
    </div>
  </section>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.section_container {
  width  : 100%;
  padding: calc(var(--sp-large) * 10) calc(var( --border-margin) * 2);
  margin : 0 auto;

  @include mediaScreen('tablet') {
      /* padding: calc(var(--sp-large) * 6) calc(var( --border-margin) * 4); */
  }

  @include mediaScreen('mobile') {
    padding: calc(var(--sp-large) * 10) calc(var( --border-margin) * 2);
  }
}
</style>