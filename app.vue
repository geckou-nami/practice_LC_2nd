<script setup lang="ts">
const members = await fetch('/json/members.json').then(res => res.json())
const companies = await fetch('/json/companies.json').then(res => res.json())

// const scrollToTop = () => {
//   window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
// }
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
  <div>
    <GradientBackground />
    <WavyDecoration />
    <SectionHero id="HERO" />
    <main :class="$style.main_container">
      <SectionAbout 
        id="ABOUT" 
        :isCurrent="currentSectionId === 'ABOUT'"
      />
      <SectionNews 
        id="NEWS"
        :isCurrent="currentSectionId === 'NEWS'"
      />
      <SectionMember 
        id="MEMBERS"
        :isCurrent="currentSectionId === 'MEMBERS'"
        :childMembers="members"
        :companies="companies"
      />
      <SectionActivity 
        :class="$style.section_activity"
        id="ACTIVITY"
        :isCurrent="currentSectionId === 'ACTIVITY'"
      />
      <SectionContact 
        id="CONTACT" 
        :isCurrent="currentSectionId === 'CONTACT'"
      />
      <SectionLinks 
        id="LINKS"
        :isCurrent="currentSectionId === 'LINKS'"
      />
    </main>
    <GlobalNav />
  </div>
</template>

<style lang="scss" module>
.main_container {
  width  : 100%;
}

.section_activity {
  margin-top: calc(var(--bv) * -40);
  /* padding-top: calc(var(--bv) * -40); */
}
</style>
