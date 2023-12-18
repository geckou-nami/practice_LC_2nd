<script setup lang="ts">
const members = await fetch('/json/members.json').then(res => res.json())
const companies = await fetch('/json/companies.json').then(res => res.json())

console.log(members);

// useSeoMeta({
//   title        : () => `title: ${head.value.title}`,
//   description  : () => `description: ${head.value.description}`,
//   ogTitle      : () => `og:title: ${head.value.title}`,
//   ogDescription: () => `og:description: ${head.value.description}`,
// })

// const scrollToTop = () => {
//   window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
// }

</script>

<template>
  <div>
    <GradientBackground />
    <WavyDecoration />
    <FlameMenu />
    <SectionHero />
    <main :class="$style.main_container">
      <SectionAbout />
      <SectionNews />
      <SectionMember 
        :childMembers="members"
        :companies="companies"
      />
      <SectionActivity />
      <SectionContact id="contact"/>
      <SectionLinks />
    </main>
  </div>
</template>

<style lang="scss" module>
.main_container {
  width  : 100%;
}
</style>
