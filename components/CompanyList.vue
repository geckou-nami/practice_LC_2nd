<script setup lang="ts">
type Props = {
  companies: {image: string, name: string, link: string}[]
}

const props = defineProps<Props>()
</script>

<template>
  <ul 
    v-show="companies.length"
    :class="$style.company_list_wrapper"
  >
    <li 
      v-for="company in companies"
      :key="company.name"
      :class="$style.company_list_item"
    >
      <div :class="$style.company_list_circle">
        <img 
          v-if="company.image"
          :src="`/images/${company.image}`" 
          :alt="company.name" 
          :class="$style.company_list_pic"
        >
        <img
          v-else
          src="@/assets/images/comingsoon.png"
          :alt="company.name"
          :class="$style.company_list_pic"
        >
      </div>
    </li>
  </ul>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.company_list_wrapper {
  width          : 100%;
  display        : flex;
  flex-wrap      : wrap;
  justify-content: center;
  gap            : var(--sp-larger);

  @include mediaScreen('tablet') {
    justify-content: space-between;
    gap            : var(--sp-large) var(--sp-medium);
  }
}

.company_list_item {
  width: 100%;
  flex : 0 0 calc((100% - var(--sp-larger) * 3) / 4);

  @include mediaScreen('tablet') {
    flex: 0 0 calc((100% - var(--sp-medium) * 2) / 2);
  }

  .company_list_circle{
    border-radius   : 50%;
    aspect-ratio    : 1/1;
    background-color: var(--dark-white);
    display         : flex;
    justify-content : center;
    align-items     : center;
    padding: calc(var(--sp-large) * 1.5);

    img {   
      width: 100%;
    } 
  }
}
</style>