<template>
  <div :class="$style.member_list_wrapper">
    <div :class="$style.member_list_card">
      <img src="~/assets/images/no_image.png" alt="顔写真" :class="$style.member_list_pic">
      <div :class="$style.member_list_contents">
        <h4>理事／武者 慶佑</h4>
        <p :class="$style.member_list_text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
    </div>
    <div :class="$style.member_list_card">
      <img src="~/assets/images/no_image.png" alt="顔写真" :class="$style.member_list_pic">
      <div :class="$style.member_list_contents">
        <h4>理事／武者 慶佑</h4>
        <p :class="$style.member_list_text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
    </div>
    <div :class="$style.member_list_card">
      <img src="~/assets/images/no_image.png" alt="顔写真" :class="$style.member_list_pic">
      <div :class="$style.member_list_contents">
        <h4>理事／武者 慶佑</h4>
        <p :class="$style.member_list_text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>

.member_list_wrapper {
  width     : 100%;
  display   : flex;
  gap       : var(--sp-larger);
  margin-top: calc(var(--sp-larger) * 3);
}

.member_list_card {
  background-color: var(--dark-white);
  border-radius   : 32px;
  display         : flex;
  flex-direction  : column;
  align-items     : center;
  text-align      : center;
  gap             : var(--sp-larger);
  padding         : var(--sp-large);
  position        : relative;
  

  img {
    border-radius: 50%;
    width        : 160px;
    aspect-ratio : 1/1;
  }

  &:nth-child(2) {
    top: var(--sp-larger);
  }

  &:nth-child(3) {
    top: calc(var(--sp-larger) * 2);
  }
}

.member_list_contents {
  color : var(--black);
}
</style>