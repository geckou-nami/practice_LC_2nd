<script setup lang="ts">
  const activities = [
    {
      title:'定期セミナー',
      description:'ライブコマースに関するセミナー·勉強会を定期的に実施します。オフライン開催にすることで横の連携を強めます。<br>開催日時·テーマ·お申込みはNEWSよりご確認ください。',
      image:'IconSeminar',
    },
    {
      title:'コンサルティング',
      description:'企業·ブランドのライブコマースの戦略、レポート、コマーサー育成サポートなどをご支援しております。詳しくはお問い合わせよりご連絡ください。',
      image:'IconHandShake',
    },
    {
      title:'執筆・登壇',
      description:'ライブコマースに関する登壇、取材対応、記事の執筆などを行っています。お問い合わせよりご依頼ください。<br>過去登壇はこちら',
      image:'IconArticle',
    },
  ]

//   onMounted(() => {
//   useIntersectionObserver().doObserve(elements)
// })
</script>

<template>
  <SectionContainer :sectionName="'ACTIVITY'">
    <div :class="$style.activity_wrapper">
      <div :class="$style.activity_item"
        v-for=" activity in activities"
        :key = "activity.team"
      >
        <div :class="$style.icon_circle">
          <component :is ="activity.image"/>
        </div>
        <div :class="$style.activity_contents">
          <h4>{{ activity.title }}</h4>
          <p v-html="activity.description"></p>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.activity_wrapper {
  width         : 100%;
  display       : flex;
  flex-direction: column;
  align-items   : center;
  gap           : var(--sp-large);

  @include mediaScreen('tablet') {
    gap : calc(var(--sp-max) * 1.5);
  }
}

.activity_item {
  display    : flex;
  align-items: center;
  gap        : var(--sp-large);
  max-width  : calc(100% - var(--bv) * 50);
  position   : relative;
  left       : var(--sp-larger);

  @include mediaScreen('tablet') {
    display       : flex;
    flex-direction: column;
    left:0 !important;
    max-width: 100%;
  }

  &:nth-child(1) {
    left:calc(var(--sp-max) * -1);
  }

  &:nth-child(2) {
    left:calc(var(--sp-max) * 0);
  }

  &:nth-child(3) {
    left:calc(var(--sp-max) * 1);
  }
}

.icon_circle {
  border-radius  : 50%;
  width          : calc(var(--bv) * 18);
  height         : calc(var(--bv) * 18);
  aspect-ratio   : 1/1;
  display        : flex;
  justify-content: center;
  align-items    : center;
  padding        : var(--sp-large);
  background     : rgba(255, 255, 255, 0.60);
  box-shadow     : var(--box-shadow);
  backdrop-filter: blur(6px);
  mix-blend-mode : luminosity;

  @include mediaScreen('tablet') {
    width :calc(var(--bv) * 26);
    height :calc(var(--bv) * 26);
  }
}

.activity_contents {
  display: flex;
  flex-direction: column;
  gap: var(--sp-medium);
  line-height: 1.8;

  h4 {
    @include mediaScreen('tablet') {
      text-align : center;
    }
  }
}
</style>