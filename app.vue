<script setup lang="ts">
const members = await fetch('/json/members.json').then(res => res.json())
const companies = await fetch('/json/companies.json').then(res => res.json())

console.log(members);

// const scrollToTop = () => {
//   window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
// }

</script>

<template>
  <div>
    <GradientBackground />
    <WavyDecoration />
    <SectionHero id="HERO" />
    <main :class="$style.main_container">
      <SectionAbout id="ABOUT" />
      <SectionNews id="NEWS" />
      <SectionMember 
        id="MEMBERS"
        :childMembers="members"
        :companies="companies"
      />
      <SectionActivity id="ACTIVITY" />
      <SectionContact id="CONTACT" />
      <SectionLinks id="LINKS" />
    </main>
      <FlameMenu />
  </div>
</template>

<style lang="scss" module>
.main_container {
  width  : 100%;
}
</style>
