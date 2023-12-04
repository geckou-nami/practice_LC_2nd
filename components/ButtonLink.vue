<template>
  <div>
    <button><a :class="$style.hero_button" href="#contact">▶︎ CONTACT US!</a></button>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.hero_button {
  display        : inline-flex;
  color          : var(--pink);
  font-family    : var(--font-family-rounded);
  font-weight    : 500;
  font-size      : calc(var(--fs-max) * 1.2);
  letter-spacing : 3.2px;
  text-decoration: none;
  justify-content: center;
  align-items    : center;
  padding        : var(--sp-small) var(--sp-medium);
  border-radius  : 40px;
  border         : 4px solid var(--accent, #DF237E);
  background     : var(--white, #FFF);
  box-shadow     : 0px 0px 64px 0px rgba(47, 7, 26, 0.20);

  @include mediaScreen('tablet') {
    font-size: var(--fs-larger);
  }
}
</style>