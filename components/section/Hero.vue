<template>
  <section>
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
  </section>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

section {
  width :100%;
  height: 100dvh;
  position: relative; 
}

.hero_wrapper {
  width          : 100%;
  height: 100svh;
  display        : flex;
  flex-wrap      : wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap            : calc(var(--sp) * 6) calc(var(--sp) * 8);
  position: relative;
  left           : calc(var(--sp) * 2);
  
  @include mediaScreen('tablet') {
    gap: calc(var(--sp) * 4) calc(var(--sp) * 3);
  }
}

.hero_img {
  position: relative;

  &::before,
  &::after {
    content: "";
    width:100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
    border-radius: 16px;
  }

  &::before {
    background-image: var(--background-overlay);
    mix-blend-mode: screen;
    z-index: 1;
  }

  &::after {
    background: var(--exclusion, rgba(110, 66, 235, 0.30)); 
    mix-blend-mode: exclusion;
  }
  
  &:nth-child(4){
    margin-left: calc(var(--sp) * -8);
  }
    

  @include mediaScreen('tablet') {

    &:nth-child(1) {
      margin-left: calc(var(--sp) * -6);
    }
    
    &:nth-child(4){
      margin-left:0;
      /* margin-right: calc(var(--sp) * -6); */
    }
      
    &:nth-child(5) {
      margin-left: calc(var(--sp) * -12);
    }
  }

  img {
    width:clamp(10.625rem, -1.475rem + 41.37vw, 25rem);
    border-radius: 16px;
  }
}

.hero_text {
  text-shadow: 0px 0px 16px rgba(47, 7, 26, 0.40);
  font-size: var( --fs-larger);
  font-weight: 500;
  position: absolute;
  bottom:calc(var(--bv) * 18);
  left: calc(var(--bv) * 18);

  @include mediaScreen('tablet') {
    font-size: var(--font-size-large);
    left     : calc(var(--bv) * 4);
    bottom   : calc(var(--bv) * 4);
  }
}

.hero_button {
  position : absolute;
  top      : 50%;
  left     : 50%;
  transform: translate(-50%,-50%);
}
</style>