<template>
  <div :class="$style.wave_container">
    <div :class="$style.wave_wrapper1">
      <div :class="$style.wave">
        <div />
      </div>
      <div :class="$style.wave">
        <div />
      </div>
      <div :class="$style.wave">
        <div />
      </div>
      <div :class="$style.wave">
        <div />
      </div>
      <div :class="$style.wave">
        <div />
      </div>
      <div :class="$style.wave">
        <div />
      </div>
    </div>
      <div :class="$style.wave_wrapper2">
      <div :class="$style.wave">
        <div />
      </div>
      <div :class="$style.wave">
        <div />
      </div>
      <div :class="$style.wave">
        <div />
      </div>
      <div :class="$style.wave">
        <div />
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>

.wave_container {
  width   : 100%;
  display : flex;
  position: fixed;
  top     : 0;
  left    : 0;
  z-index : -9;
}
.wave_wrapper1 {
  width          : 100%;
  height         : 100vh;
  display        : flex;
  justify-content: center;
  align-items    : center;
  position       : relative;
  margin-bottom  : calc(var(--bv) * 10);

  :nth-child(2) {
    width:calc(0.5em * 10 + (0.5em * 20 * 2));
  }
  :nth-child(3) {
    width:calc(0.5em * 10 + (0.5em * 20 * 3));
  }
  :nth-child(4) {
    width:calc(0.5em * 10 + (0.5em * 20 * 4));
  }
  :nth-child(5) {
    width:calc(0.5em * 10 + (0.5em * 20 * 5));
  }
  :nth-child(6) {
    width:calc(0.5em * 10 + (0.5em * 20 * 6));
  }
}

.wave {
  width       : calc(0.5em * 10 + (0.5em * 20 * 1));
  position    : absolute;
  aspect-ratio: 1/1;
  font-size   : clamp(0.5rem, 1.33vw, 1rem);

  > div {
    margin          : auto;
    aspect-ratio    : 1/1;
    border-radius   : 50%;
    background-color: rgba(255, 255, 255, 0.04);
    mix-blend-mode  : overlay;
    position        : absolute;
    top             : 0;
    right           : 0;
    bottom          : 0;
    left            : 0;
  }
}
.wave_wrapper2 {
  width          : 100%;
  height         : 100vh;
  display        : flex;
  justify-content: center;
  align-items    : center;
  position       : relative;
  margin-top     : calc(var(--bv) * 30);

  :nth-child(2) {
    width:calc(0.5em * 10 + (0.5em * 20 * 2));
  }
  :nth-child(3) {
    width:calc(0.5em * 10 + (0.5em * 20 * 3));
  }
  :nth-child(4) {
    width:calc(0.5em * 10 + (0.5em * 20 * 4));
  }
}
</style>