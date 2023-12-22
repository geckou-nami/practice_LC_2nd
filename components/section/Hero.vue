<template>
  <div :class="$style.hero_container">
    <div :class="$style.hero_wrapper">
      <div :class="$style.hero_img">
        <img src="~/assets/images/hero_1.webp" alt="メイン写真">
      </div>
      <div :class="$style.hero_img">
        <img src="~/assets/images/hero_2.webp" alt="メイン写真">
      </div>
      <div :class="$style.hero_img">
        <img src="~/assets/images/hero_3.webp" alt="メイン写真">
      </div>
      <div :class="$style.hero_img">
        <img src="~/assets/images/hero_4.webp" alt="メイン写真">
      </div>
      <div :class="$style.hero_img">
        <img src="~/assets/images/hero_5.webp" alt="メイン写真">
      </div>
      <div :class="$style.hero_img">
        <img src="~/assets/images/hero_6.webp" alt="メイン写真">
      </div>
    </div>
    <p :class="$style.hero_text">日本ライブコマース協会は、<br>
        日本におけるライブコマース文化の<br>
        促進を支援します。</p>
    <ButtonLink :class="$style.hero_button"/>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.hero_container {
  width   : 100%;
  height  : 100dvh;
  position: relative;
  overflow: hidden;
}

.hero_wrapper {
  width          : 100%;
  height         : 100svh;
  display        : flex;
  flex-wrap      : wrap;
  justify-content: center;
  align-items    : center;
  align-content  : center;
  gap            : calc(var(--sp) * 6) calc(var(--sp) * 8);
  position       : relative;
  left           : calc(var(--sp) * 2);
  
  @include mediaScreen('tablet') {
    gap: calc(var(--sp) * 4) calc(var(--sp) * 3);
  }
}

.hero_img {
  position           : relative;
  width              : calc(100% / 3 - (var(--bv) * 11));
  opacity            : 0;
  animation-name     : slideInLeft;
  animation-duration : .3s;
  animation-fill-mode: forwards;

  &::before,
  &::after {
    content      : "";
    width        : 100%;
    height       : 100%;
    position     : absolute;
    top          : 0;
    left         : 0;
    border-radius: 16px;
  }

  &::before {
    background-image: var(--background-overlay);
    mix-blend-mode  : screen;
    z-index         : 1;
  }

  &::after {
    background    : var(--exclusion, rgba(110, 66, 235, 0.30));
    mix-blend-mode: exclusion;
  }
  
  &:nth-child(2){
    animation-delay: 0.1s;
  }
  &:nth-child(3){
    animation-delay: 0.2s;
  }
  &:nth-child(4){
    margin-left: calc(var(--sp) * -8);
    animation-delay: 0.3s;
  }
  &:nth-child(5){
    animation-delay: 0.4s;
  }
  &:nth-child(6){
    animation-delay: 0.5s;
  }

  @include mediaScreen('tablet') {
    &:nth-child(4){
      margin-left : 0;
      margin-right: calc(var(--sp) * -8);
    }
  }
    

  @include mediaScreen('tablet') {
    width:calc(100% / 2 - (var(--bv) * 2));

    &:nth-child(1) {
      margin-left: calc(var(--sp) * -6);
    }
    &:nth-child(4){
      margin-left : 0;
      margin-right: calc(var(--sp) * -6);
    }
    &:nth-child(5) {
      margin-left: calc(var(--sp) * -12);
    }
  }

  img {
    border-radius: 16px;
  }
}

.hero_text {
  text-shadow: 0px 0px 16px rgba(47, 7, 26, 0.40);
  font-size  : var( --fs-larger);
  font-weight: 500;
  position   : absolute;
  bottom     : calc(var(--bv) * 18);
  left       : calc(var(--bv) * 18);

  @include mediaScreen('tablet') {
    font-size: var(--fs-large);
    left     : calc(var(--bv) * 8);
    bottom   : calc(var(--bv) * 8);
  }
}

.hero_button {
  position: absolute;
  top      : 50%;
  left     : 50%;
  transform: translate(-50%,-50%);  
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
</style>