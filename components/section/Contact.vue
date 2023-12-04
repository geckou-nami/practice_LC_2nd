<template>
  <SectionContainer>
    <div :class="$style.contact_wrapper">
      <div :class="$style.contact_text">
        執筆・セミナーなどなどライブコマースに関わるお仕事の依頼、<br>
        本協会への参加のご希望などはこちらからご連絡ください。
      </div>
      <button>
        <a :class="$style.contact_button" href="#">
          <IconMail />
          CONTACT US!
        </a>
      </button>
    </div>
  </SectionContainer>
</template>

<style lang="scss" module>

.contact_wrapper {
  width          : 100%;
  height         : 100dvh;
  display        : flex;
  flex-direction : column;
  justify-content: center;
  align-items    : center;
  gap            : var(--sp-larger)
}


.contact_text {
  font-size: var(--fs-larger);
  font-weight: bold;
  text-align: center;
}
.contact_button {
  display        : inline-flex;
  color          : var(--white);
  font-family    : var(--font-family-rounded);
  font-weight    : 500;
  font-size      : calc(var(--fs-max) * 1.2);
  letter-spacing : 3.2px;
  text-decoration: none;
  justify-content: center;
  align-items    : center;
  padding        : var(--sp-medium) var(--sp-large);
  border-radius  : 40px;
  gap            : var(--sp-medium);
  background     : var(--button-gradient);
  box-shadow     : 0px 0px 64px 0px rgba(47, 7, 26, 0.20);
}
</style>