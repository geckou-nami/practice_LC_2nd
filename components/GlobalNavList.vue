<template>
  <div :class="$style.nav_list_container">
    <div :class="$style.nav_list_wrapper">
      <h1><img src="~/assets/images/logo_black.webp" alt="日本ライブコマース協会" :class="$style.main_logo"></h1>
      <dl :class="$style.nav_list">
        <dt>NEWS</dt>
        <dd>お知らせ</dd>
        <dt>MEMBERS</dt>
        <dd>日本ライブコマース協会 会員</dd>
        <dt>ACTIVITY</dt>
        <dd>活動内容</dd>
        <dt>LINKS</dt>
        <dd>関連リンク</dd>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" module>

.nav_list_container {
  width:100%;
  height:100vh;
}

.nav_list_wrapper {
  width:100%;
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap :calc(var(--sp-large) * 2);
  padding-left:var(--sp-large);
}

.main_logo {
  width:542px;
}

.nav_list {
  display: grid;

  dt {
    font-family: var(--font-family-rounded);
    font-size: var(--fs-max);
    font-weight: bold;
    color:var(--pink);
    margin-bottom :var(--sp-min);
  }

  dd {
    color: var(--black);
    margin-bottom :var(--sp-large);
  }
}
</style>