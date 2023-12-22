<script setup lang="ts">
type Props = {
  grandChildMembers: {name: string, text: string, image: string}[]
  isCurrent: boolean
}

const props = withDefaults(defineProps<Props>(), {})
const targetElement = ref<HTMLElement | null>(null)
const elements = [
  targetElement,
]
</script>

<template>
  <ul 
    ref="targetElement"
    :class="$style.member_list_wrapper"
  >
    <li 
      v-for="(member, index) in grandChildMembers"
      :key="member.name"
      :class="[$style.member_list_card, isCurrent ? $style.active : '']"
      :style="{
        animationDelay: `${index * .1}s`,
      }"
    >
      <img 
        v-if="member.image"
        :src="`/images/${member.image}`"
        :alt="member.name"
        :class="$style.member_list_pic"
      >
      <img 
        v-else
        src="@/assets/images/comingsoon.png"
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
  display        : flex;
  flex-wrap      : wrap;
  gap            : var(--sp-max);
  justify-content: center;

  @include mediaScreen('tablet')  {
    gap: var(--sp-larger);
  }

  @include mediaScreen('mobile')  {
    display       : flex;
    flex-direction: column;
    gap           : var(--sp-large);
  }
}

.member_list_card {
  background     : rgba(255, 255, 255, 0.60);
  box-shadow     : var(--box-shadow);
  backdrop-filter: blur(6px);
  width          : calc((100% - var(--sp-max) * 2) / 3);
  border-radius  : var( --border-radius-base);
  display        : flex;
  flex-direction : column;
  justify-content: flex-start;
  align-items    : center;
  text-align     : center;
  gap            : var(--sp-large);
  padding        : calc(var(--sp-larger) * 1.5)  var(--sp-large);
  position       : relative;

  &.active {
    animation-name     : slideInDown;
    animation-duration : .5s;
    animation-fill-mode: forwards;
  }

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
    width : calc((100% - var(--sp-larger) * 2) / 2);
  }

  @include mediaScreen('mobile')  {
    width: 100%;
    top  : 0 !important;
    gap  : calc(var(--sp-larger) * 1.5);
  }
}

.member_list_contents {
  color : var(--black);
}

@keyframes slideInDown {
  from {
    opacity  : 0;
    transform: translateY(-36px);
  }

  to {
    opacity  : 1;
    transform: translateY(0px);
  }
}
</style>