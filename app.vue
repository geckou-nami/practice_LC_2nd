<template>
  <div>
    <GlobalNav />
    <SectionHero />
    <main :class="$style.main_container">
      <SectionAbout />
      <SectionNews />
      <SectionMember />
      <SectionActivity />
      <SectionContact />
      <SectionLinks />
    </main>
  </div>
</template>

<style lang="scss" module>

.main_container {
  width  : 100%;
}

</style>
