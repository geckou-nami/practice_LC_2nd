<script setup lang="ts">
type Props = {
  text: string,
}

const props = defineProps<Props>()
const currentSectionId = ref('')

onMounted(async() => {
  const HeroSectionEl: HTMLElement | null = document.getElementById('HERO')
  const AboutSectionEl: HTMLElement | null = document.getElementById('ABOUT')
  const NewsSectionEl: HTMLElement | null = document.getElementById('NEWS')
  const MembersSectionEl: HTMLElement | null = document.getElementById('MEMBERS')
  const ActivitySectionEl: HTMLElement | null = document.getElementById('ACTIVITY')
  const ContactSectionEl: HTMLElement | null = document.getElementById('CONTACT')
  const LinksSectionEl: HTMLElement | null = document.getElementById('LINKS')
  const elements = [
    HeroSectionEl,
    AboutSectionEl,
    NewsSectionEl,
    MembersSectionEl,
    ActivitySectionEl,
    ContactSectionEl,
    LinksSectionEl,
  ].filter(Boolean)

  createObserver(elements)
})

const createObserver = (elements: any[]) => {
  const options = {
    root      : null,
    rootMargin: '0px',
    threshold : 0.2,
  }

  elements.forEach((element: HTMLElement | null) => {
    if (element) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log(entry.target.id);
            currentSectionId.value = entry.target.id
            console.log(currentSectionId.value);
          }
        })
      }, options)
      observer.observe(element)
    }
  })
}
</script>

<template>
  <div :class="[$style.heading, currentSectionId === text ? $style.display : '']">
    <h2>
      currentSectionId: {{ currentSectionId }}
      text: {{ text }}
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
  /* opacity        : 0; */
  filter         : blur(200px);
  transition     : all .6s;

  /* @include mediaScreen('mobile') {
    left: -8em;
  } */

    > h2 {
      color         : rgba(255, 255, 255, .1);
      font-size     : var(--fs-heading);
      font-weight   : 500;
      font-family   : var(--font-family-rounded);
      letter-spacing: var(--letter-spacing-narrow);
      transform     : rotate(-12deg);

      /* @include mediaScreen('mobile') {
        transform: rotate(90deg);
      } */
    }
  
  &.display {
    filter : blur(0px);
    opacity: 1;
  }
}
</style>