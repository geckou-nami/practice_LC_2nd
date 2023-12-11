<template>
  <div :class="$style.flame_container">
    <div :class="$style.frame">
      <img src="~/assets/images/mainlogo.png" alt="日本ライブコマース協会">
      <div :class="$style.menu_box">
          <GlobalNavButton />
        <div :class="$style.sns_icon">
          <IconTwitter />
        </div>
        <div :class="$style.sns_icon">
          <IconNote />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;
.flame_container {
  width   : 100vw;
  height  : 100vh;
  padding : var(--border-margin);
  position: fixed;
  top     : 0;
  z-index : var(--z-index-nav);

  @include mediaScreen('tablet') {
    padding:var(--border-size );
  }
}
.frame {
  width        : 100%;
  height       : 100%;
  border       : var(--border-size) solid var(--white);
  border-radius: var(--border-radius-base);
  display: flex;
  justify-content: space-between;
  padding:var(--sp-medium);

  img {
    width:480px;
    height: 90px;
    position: relative;
    left:calc(var(--sp-medium) * -1);

    @include mediaScreen('tablet') {
      width : 200px;
      height: 45px;
    }
  }
}

.menu_box {
  display       : flex;
  flex-direction: column;
  gap           : var(--sp-large);
  align-items   : flex-end;

  @include mediaScreen('tablet') {
    gap : var(--sp-small);
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