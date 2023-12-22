<script setup lang="ts">
type Props = {
  sectionName: string
  isCurrent:boolean
}

const props = defineProps<Props>()
</script>

<template>
  <section>
    <SectionHeading
      v-if="sectionName"
      :text="sectionName"
      :isCurrent="isCurrent"
      />
    <div :class="$style.section_container">
      <slot />
    </div>
  </section>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.section_container {
  width     : 100%;
  min-height: 100dvh;
  padding   : calc(var(--sp-large) * 8) calc(var(--border-margin) * 2);
  margin    : 0 auto;

  @include mediaScreen('mobile') {
    padding: calc(var(--sp-large) * 10) calc(var(--border-margin) * 2);
  }
}
</style>