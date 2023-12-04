<template>
  <div :class="$style.company_list_wrapper">
    <div :class="$style.company_list_item">
      <div :class="$style.company_list_circle">
        <img src="~/assets/images/logo_tanaka_flag.webp" alt="企業ロゴ" :class="$style.company_list_pic">
      </div>
    </div>
    <div :class="$style.company_list_item">
      <div :class="$style.company_list_circle">
        <img src="~/assets/images/logo_tanaka_flag.webp" alt="企業ロゴ" :class="$style.company_list_pic">
      </div>
    </div>
    <div :class="$style.company_list_item">
      <div :class="$style.company_list_circle">
        <img src="~/assets/images/logo_tanaka_flag.webp" alt="企業ロゴ" :class="$style.company_list_pic">
      </div>
    </div>
    <div :class="$style.company_list_item">
      <div :class="$style.company_list_circle">
        <img src="~/assets/images/logo_tanaka_flag.webp" alt="企業ロゴ" :class="$style.company_list_pic">
      </div>
    </div>
    <div :class="$style.company_list_item">
      <div :class="$style.company_list_circle">
        <img src="~/assets/images/logo_tanaka_flag.webp" alt="企業ロゴ" :class="$style.company_list_pic">
      </div>
    </div>
    <div :class="$style.company_list_item">
      <div :class="$style.company_list_circle">
        <img src="~/assets/images/logo_tanaka_flag.webp" alt="企業ロゴ" :class="$style.company_list_pic">
      </div>
    </div>
    <div :class="$style.company_list_item">
      <div :class="$style.company_list_circle">
        <img src="~/assets/images/logo_tanaka_flag.webp" alt="企業ロゴ" :class="$style.company_list_pic">
      </div>
    </div>
    <div :class="$style.company_list_item">
      <div :class="$style.company_list_circle">
        <img src="~/assets/images/logo_tanaka_flag.webp" alt="企業ロゴ" :class="$style.company_list_pic">
      </div>
    </div>


  </div>
</template>

<style lang="scss" module>

.company_list_wrapper {
  width :100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--sp-larger);
  margin-top: calc(var(--sp-larger) * 3);
}

.company_list_item {
  width:100%;
  flex: 0 0 calc((100% - var(--sp-larger) * 3) / 4);

  .company_list_circle{
    border-radius   : 50%;
    aspect-ratio    : 1/1;
    background-color: var(--dark-white);
    display         : flex;
    justify-content : center;
    align-items     : center;
    padding: calc(var(--sp-large) * 1.5);

    img {   
      width: 100%;
    } 
  }
}
</style>