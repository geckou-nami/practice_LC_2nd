<script setup lang="ts">

// onMounted(() => {
//   useIntersectionObserver().doObserve(elements)
// })
</script>

<template>
  <SectionContainer :sectionName="'NEWS'">
    <div :class="$style.news_wrapper">
      <ul :class="$style.news_list">
        <li>
          <img src="~/assets/images/00002.png" alt="IMAGE" :class="$style.image">
          <div :class="$style.news_contents">
            <h4 :class="$style.news_text">記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル</h4>
            <time>2023.3.3</time>
          </div>
        </li>
        <li>
          <img src="~/assets/images/00003.png" alt="IMAGE" :class="$style.image">
          <div :class="$style.news_contents">
            <h4 :class="$style.news_text">記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル</h4>
            <time>2023.3.3</time>
          </div>
        </li>
        <li>
          <img src="~/assets/images/00004.png" alt="IMAGE" :class="$style.image">
          <div :class="$style.news_contents">
            <h4 :class="$style.news_text">記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル</h4>
            <time>2023.3.3</time>
          </div>
        </li>
        <li>
          <img src="~/assets/images/00005.png" alt="IMAGE" :class="$style.image">
          <div :class="$style.news_contents">
            <h4 :class="$style.news_text">記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル記事タイトル</h4>
            <time>2023.3.3</time>
          </div>
        </li>
      </ul>
    </div>
  </SectionContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.news_wrapper {
  width:100%;
}

.news_list {
  display       : flex;
  flex-direction: column;
  width         : 100%;
  gap           : var(--sp-larger);
  padding       : 0 calc(var(--bv) * 10);


  @include mediaScreen('tablet') {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap           : var(--sp-medium);
    padding       : 0 ;
  }

  > li {
    width          : calc(100% - (var(--bv) * 8) * 3);
    display        : flex;
    justify-content: center;
    border-radius  : var(--border-radius-base);
    background     : rgba(255, 255, 255, 0.60);
    box-shadow     : var(--box-shadow);
    backdrop-filter: blur(6px);
    position       : relative;

    &:nth-child(1) {
      left:calc(calc(var(--bv) * 8) * 0);
    }

    &:nth-child(2) {
      left:calc(calc(var(--bv) * 8) * 1);
    }

    &:nth-child(3) {
      left:calc(calc(var(--bv) * 8) * 2);
    }

    &:nth-child(4) {
      left:calc(calc(var(--bv) * 8) * 3);
    }

    @include mediaScreen('tablet') {
      display       : flex;
      flex-direction: column;
      width         : calc((100% - var(--sp-medium)) / 2);
      left          : 0 !important;

      &:nth-child(odd) {
        top: calc(var(--bv) * -8);
      }
    }
  } 

}

.image {
  flex         : 0 0 38%;
  aspect-ratio : var(--silver-ratio);
  display      : flex;
  width        : 38%;
  object-fit   : cover;
  border-radius: var(--border-radius-base) 0 0 var(--border-radius-base);

  @include mediaScreen('tablet') {
    width        : 100%;
    border-radius: var(--border-radius-base) var(--border-radius-base) 0 0;
  }
}

.news_contents {
  display        : flex;
  flex-direction : column;
  justify-content: space-between;
  color          : var(--black);
  padding        : var(--sp-large);
  gap            : var(--sp-large);
  overflow: hidden;

  time {
    text-align: end;
  }

  @include mediaScreen('tablet') {
    padding        : var(--sp-medium);
  }
}
</style>