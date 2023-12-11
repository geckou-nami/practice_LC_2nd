<script setup lang="ts">
const members = await fetch('/json/members.json').then(res => res.json())
const companies = await fetch('/json/companies.json').then(res => res.json())

console.log(members);

</script>

<template>
  <div>
    <!-- <FlameMenu /> -->
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
