<script setup lang="ts">
type Props = {
  childMembers: {name: string, text: string, image: string}[]
  companies: {image: string, name: string, link: string}[]
}

const props = defineProps<Props>()
</script>

<template>
  <SectionContainer :sectionName="'MEMBER'">
    <div :class="$style.member_container" >
      <div :class="$style.member_wrapper">
        <img src="~/assets/images/chairman.webp" alt="会長の写真" :class="$style.member_pic">
        <div :class="$style.member_contents">
          <h4>会長／武者 慶佑</h4>
          <p :class="$style.member_text">スターバックス、ビジネス·ブレークスルーなどの事業会社のマーケティング、Kona’s Coffeeのブランドマネージャー、SNSコンサルティング会社を経て、2021年より株式会社アイレップにてライブコマース・エヴァンジェリストとして活動。
            アパレル、食品、化粧品などのライブコマースの立ち上げや、コマーサー育成などを実施。ad:tech tokyo2021、Japan IT EXPO2021 などに登壇。</p>
          <p :class="$style.member_text">2022年「成果を上げるライブコマースの教科書」を執筆し、Amazonカテゴリランキング1位となる。自らもコマーサーとしても出演。
            また、2013年より日本グミ協会を発足し、Twitter、Instagramのフォロワー数延べ20万人の国内最大のグミのコミュニティを運営し、グミの日のプロデュースなどを行う。</p>
        </div>
      </div>
    <MemberList :grandChildMembers="childMembers" />
    <CompanyList :companies="companies" />
    </div>
  </SectionContainer>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.member_container {
  display: flex;
  flex-direction: column;
  gap:calc(var(--bv) * 40);
}

.member_wrapper {
  width          : 100%;
  display        : flex;
  border-radius  : var(--border-radius-base);
  background     : rgba(255, 255, 255, 0.60);
  box-shadow     : var(--box-shadow);
  backdrop-filter: blur(6px);
  overflow       : hidden;

  @include mediaScreen('tablet') {
    display: flex;
    flex-direction: column;
  }

  img {
    flex          : 0 0 38%;
    width         : 38%;
    object-fit    : cover;
    mix-blend-mode: darken;
    aspect-ratio  : var(--golden-ratio);

    @include mediaScreen('tablet') {
      width   : 100%;
      height  : 100%;
      position: absolute;
      top     : 0;
      left    : 0;
      opacity : .3;
    }
  }
}

.member_contents {
  display        : flex;
  flex-direction : column;
  justify-content: center;
  gap            : var(--sp-large);
  padding        : calc(var(--sp-larger) * 1.5)  var(--sp-larger);
  color          : var(--black);

  p {
    font-size     : var(--fs-large);
    letter-spacing: 0.1em;
  }

  @include mediaScreen('tablet') {
    margin-top: calc(var(--sp-max) * 2);
    padding : var(--sp-max)  var(--sp-large);
  }
}

</style>