<template>
  <div>
    <button><a :class="$style.hero_button" href="#contact">▶︎ CONTACT US!</a></button>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.hero_button {
  display         : flex;
  justify-content : center;
  align-items     : center;
  color           : var(--pink);
  font-family     : var(--font-family-rounded);
  font-weight     : 500;
  font-size       : var(--fs-max);
  letter-spacing  : 3.2px;
  text-decoration : none;
  border-radius   : calc(var(--bv) * 5);
  border          : 4px solid var(--pink);
  background-color: var(--white);
  box-shadow      : 0px 0px 64px 0px rgba(47, 7, 26, 0.20);
  width           : calc(var(--bv) * 42);
  height          : calc(var(--bv) * 10);
  cursor          : pointer;

  @include mediaScreen('tablet') {
    font-size: var(--fs-max);
    width        : calc(var(--bv) * 44);
    height       : calc(var(--bv) * 10);
  }
}
</style>