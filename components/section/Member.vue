<template>
  <SectionContainer>
    <div :class="$style.member_wrapper">
      <div :class="$style.member_card">
        <img src="~/assets/images/chairman.webp" alt="会長の写真" :class="$style.member_pic">
        <div :class="$style.member_contents">
          <h4>会長／武者 慶佑</h4>
          <p :class="$style.member_text">スターバックス、ビジネス·ブレークスルーなどの事業会社のマーケティング、Kona’s Coffeeのブランドマネージャー、SNSコンサルティング会社を経て、2021年より株式会社アイレップにてライブコマース・エヴァンジェリストとして活動。
            アパレル、食品、化粧品などのライブコマースの立ち上げや、コマーサー育成などを実施。ad:tech tokyo2021、Japan IT EXPO2021 などに登壇。</p>
          <p :class="$style.member_text">2022年「成果を上げるライブコマースの教科書」を執筆し、Amazonカテゴリランキング1位となる。自らもコマーサーとしても出演。
            また、2013年より日本グミ協会を発足し、Twitter、Instagramのフォロワー数延べ20万人の国内最大のグミのコミュニティを運営し、グミの日のプロデュースなどを行う。</p>
        </div>
      </div>
    </div>
    <MemberList />
    <CompanyList />
  </SectionContainer>
</template>

<style lang="scss" module>
.member_wrapper {
  width:100%;
}

.member_card {
  width          : 100%;
  display        : flex;
  border-radius  : 32px;
  background     : var(--dark-white);
  box-shadow     : 0px 0px 64px 0px rgba(47, 7, 26, 0.20);
  backdrop-filter: blur(8px);
  overflow       : hidden;


  img {
    flex          : 0 0 38%;
    width         : 38%;
    object-fit    : cover;
    mix-blend-mode: darken;
    aspect-ratio  : var(--golden-ratio);
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
}

</style>