<script setup lang="ts">
type Props = {
  grandChildMembers: {name: string, text: string, image: string}[]
}

const props = withDefaults(defineProps<Props>(), {})
const targetElement = ref<HTMLElement | null>(null)
const elements = [
  targetElement,
]

// onMounted(() => {
//   useIntersectionObserver().doObserve(elements)
// })

</script>

<template>
  <ul 
    ref="targetElement"
    :class="$style.member_list_wrapper"
  >
    <li 
      v-for="(member, index) in grandChildMembers"
      :key="member.name"
      :class="$style.member_list_card"
    >
      <img 
        v-if="member.image"
        :src="`/images/${member.image}`"
        :alt="member.name"
        :class="$style.member_list_pic"
      >
      <div :class="$style.member_list_contents">
        <h4>{{ member.name }}</h4>
        <p 
          v-html="member.text"
          :class="$style.member_list_text"
        />
      </div>
    </li>
  </ul>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.member_list_wrapper {
  width     : 100%;
  display   : flex;
  gap       : var(--sp-max);
  justify-content: flex-start;

  @include mediaScreen('tablet')  {
    display: flex;
    flex-direction: column;
    gap       : var(--sp-large);
  }
}

.member_list_card {
  background-color: var(--dark-white);
  border-radius   : var( --border-radius-base);
  display         : flex;
  flex-direction  : column;
  justify-content: flex-start;
  align-items     : center;
  text-align      : center;
  gap             : var(--sp-larger);
  padding         : calc(var(--sp-larger) * 1.5)  var(--sp-large);
  position        : relative;
  
  img {
    border-radius: 50%;
    width        : 160px;
    aspect-ratio : 1/1;
  }

  &:nth-child(2) {
    top: var(--sp-larger);
  }

  &:nth-child(3) {
    top: calc(var(--sp-larger) * 2);
  }

  @include mediaScreen('tablet')  {
    top: 0 !important;
    gap: calc(var(--sp-larger) * 1.5);
  }
}

.member_list_contents {
  color : var(--black);
}
</style>