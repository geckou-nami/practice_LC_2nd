<template>
  <div :class="$style.flame_container">
    <div :class="$style.frame" />
    <img :class="$style.frame_logo" src="~/assets/images/mainlogo.png" alt="日本ライブコマース協会">
    <div :class="$style.menu_box">
      <GlobalNavButton />
      <a :class="$style.sns_icon">
        <IconTwitter />
      </a>
      <a :class="$style.sns_icon">
        <IconNote />
      </a>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.flame_container {
  width   : 100vw;
  position: relative;

  @include mediaScreen('tablet') {
    padding:var(--border-size );
  }
}

.frame {
  width : calc(100% - (var(--bv) * 16));
  height       : calc(100% - (var(--bv) * 16));
  border       : var(--border-size) solid var(--white);
  border-radius: var(--border-radius-base);
  position     : fixed;
  top          : calc(var(--bv) * 8);
  left         : calc(var(--bv) * 8);
  z-index: var(--z-index-nav);
  pointer-events: none;
}

.frame_logo {
  width   : 420px;
  height  : 90px;
  position: fixed;
  top     : calc(var(--bv) * 12);
  left    : calc(var(--bv) * 12);
  z-index : var(--z-index-nav);

  @include mediaScreen('tablet') {
    width : 200px;
    height: 45px;
  }
}

.menu_box {
  position      : fixed;
  top           : calc(var(--bv) * 13);
  right         : calc(var(--bv) * 13);
  display       : flex;
  flex-direction: column;
  gap           : var(--sp-large);
  align-items   : flex-end;
  z-index       : var(--z-index-tooltip);

  @include mediaScreen('tablet') {
    gap: var(--sp-small);
  }
}

.sns_icon {
  width          : 48px;
  height         : 48px;
  border-radius  : 50%;
  background     : var(--button-gradient);
  backdrop-filter: blur(2px);
  display        : flex;
  justify-content: center;
  align-items    : center;

  @include mediaScreen('tablet') {
    width : 38px;
    height: 38px;
  }
}
</style>