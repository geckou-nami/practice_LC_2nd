<script setup lang="ts">
const members = ref([])
const companies = ref([])

onMounted(async() => {
  members.value = await fetch('/json/members.json').then(res => res.json())
  companies.value = await fetch('/json/companies.json').then(res => res.json())
})

console.log(members.value);

</script>

<template>
  <div>
    <FlameMenu />
    <SectionHero />
    <main :class="$style.main_container">
      <SectionAbout />
      <SectionNews />
      <SectionMember />
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
