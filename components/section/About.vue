<script setup lang="ts">
type Props = {  
  isCurrent:boolean
}

const props = defineProps<Props>()
</script>

<template>
  <SectionContainer 
    :sectionName="'ABOUT'"
    :isCurrent="isCurrent"
  >
    <div :class="$style.about_wrapper">
      <div :class="[$style.about_description, isCurrent ? $style.active : '']">
        <p>日本の1対1の接客や、おもてなし、こだわりのものづくりをライブという手段を通して1対nに届けるにはどうあるべきなのかを研究しています。</p>
        <p>ライブは、コマース機能に限らず、企業やブランドと生活者の距離を縮め、コミュニティの形成や強化を行うことができる有効なマーケティング手法でもあります。</p>
      </div>
      <div :class="[$style.about_heading, isCurrent ? $style.active : '']">
        デジタルマーケティング領域において、今後多くの企業が取り入れるべき、ライブエンゲージメントを定義し、マーケティング業界への貢献を目指します。
      </div>
      <img src="~/assets/images/about_styling.png" alt="参考写真" 
        :class="[$style.styling_img, isCurrent ? $style.active : '']">
      <img src="~/assets/images/about_live.png" alt="参考写真" 
        :class="[$style.live_img, isCurrent ? $style.active : '']">
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
  gap            : calc(var(--sp) * 5);

  &.active {
    opacity            : 0;
    animation-name     : slideInLeft;
    animation-duration : .3s;
    animation-fill-mode: forwards;
  }
}

.about_heading {
  grid-area   : heading;
  font-family : var(--font-family-rounded);
  font-size   : var(--fs-larger);
  margin-top  : 60px;
  margin-right: 90px;

  &.active {
    opacity            : 0;
    animation-name     : slideInLeft;
    animation-duration : .3s;
    animation-delay    : .4s;
    animation-fill-mode: forwards;
  }

  @include mediaScreen('tablet') {
    margin  : 0;;
  }
}

.styling_img {
  grid-area:styling;

  &.active {
    transform          : scale(.8);
    animation-name     : popUp;
    animation-duration : .5s;
    animation-fill-mode: forwards;
  }
}

.live_img {
  grid-area:live;

  &.active {
    transform          : scale(.8);
    animation-name     : popUp;
    animation-duration : .5s;
    animation-fill-mode: forwards;
    animation-delay    : .4s;
  }

  @include mediaScreen('tablet') {
    margin-top  : calc(var(--bv) * 7);
  }
}

@keyframes slideInLeft {
  from {
    opacity  : 0;
    transform: translateX(-36px);
  }

  to {
    opacity  : 1;
    transform: translateX(0px);
  }
}
@keyframes popUp {
  0% {
    transform: scale(.8);
  }

  80% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>