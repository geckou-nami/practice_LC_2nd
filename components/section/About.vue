<script setup lang="ts">
const targetElement1 = ref<HTMLElement | null>(null)
const targetElement2 = ref<HTMLElement | null>(null)
const targetElement3 = ref<HTMLElement | null>(null)
const targetElement4 = ref<HTMLElement | null>(null)
const targetElement5 = ref<HTMLElement | null>(null)

const elements = [
  targetElement1,
  targetElement2,
  targetElement3,
  targetElement4,
  targetElement5,
]

onMounted(() => {
  useIntersectionObserver().doObserve(elements)
})
</script>

<template>
  <SectionContainer :sectionName="'ABOUT'">
    <div :class="$style.about_wrapper">
      <div :class="$style.about_description">
        <p>日本の1対1の接客や、おもてなし、こだわりのものづくりをライブという手段を通して1対nに届けるにはどうあるべきなのかを研究しています。</p>
        <p>ライブは、コマース機能に限らず、企業やブランドと生活者の距離を縮め、コミュニティの形成や強化を行うことができる有効なマーケティング手法でもあります。</p>
      </div>
      <div :class="$style.about_heading">
        デジタルマーケティング領域において、今後多くの企業が取り入れるべき、ライブエンゲージメントを定義し、マーケティング業界への貢献を目指します。
      </div>
      <img src="~/assets/images/about_styling.png" alt="参考写真" :class="$style.styling_img">
      <img src="~/assets/images/about_live.png" alt="参考写真" :class="$style.live_img">
    </div>
  </SectionContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.about_wrapper {
  display              : grid;
  grid-template-columns: 50% 1fr calc(var(--bv) * 38);
  grid-template-rows   : calc(var(--bv) * 38) calc(var(--bv) * 38);
  grid-template-areas  : 
  "description styling styling"
  "heading heading live"
  "heading heading live";
  gap: calc(var(--bv) * 4) calc(var(--bv) * 15);

  @include mediaScreen('tablet') {
    grid-template-columns: 1fr 1fr;
    grid-template-rows   : auto auto 1fr;
    grid-template-areas  : 
    "styling live "
    "description description "
    "heading heading ";
    gap: calc(var(--bv) * 5);
  }
}

.about_description {
  grid-area      : description;
  display        : flex;
  flex-direction : column;
  justify-content: flex-end;
  gap: calc(var(--sp) * 5);
}

.about_heading {
  grid-area   : heading;
  font-family : var(--font-family-rounded);
  font-size   : var(--fs-larger);
  margin-top  : 60px;
  margin-right: 90px;

  @include mediaScreen('tablet') {
    margin  : 0;;
  }
}

.styling_img {
  grid-area:styling;
}

.live_img {
  grid-area:live;

  @include mediaScreen('tablet') {
    margin-top  : calc(var(--bv) * 7);
  }
}

</style>