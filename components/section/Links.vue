<script setup lang ="ts">
  const links = [
    {
      team:'社名',
      description:'株式会社田中旗店',
    },
    {
      team:'所在地',
      description:'〒541-0048<br>大阪府大阪市中央区瓦町3丁目2-6',
    },
    {
      team:'WEBサイト',
      description:'http://www.tanakaflag.jp/',
    },
    {
      team:'代表取締役',
      description:'田中 哲',
    },
  ]
</script>

<template>
  <SectionContainer>
    <div :class="$style.links_wrapper">
      <div :class="$style.inks_contents">
        <h4 :class="$style.links_list_title">運営会社</h4>
        <dl 
        :class="$style.links_list" 
        v-for ="link in links"
        :key = "link.team">
          <dt>{{ link.team }}</dt>
          <dd v-html="link.description"></dd>
        </dl>
      </div>
      <div :class="$style.inks_contents">
        <h4 :class="$style.links_list_title">関連書籍</h4>
        <img src="~/assets/images/book.webp" alt="関連書籍">
        <a href="#">Amazon</a>
      </div>
    </div>
  </SectionContainer>
</template>

<style lang="scss" module>

.links_wrapper {
  width          : 100%;
  display        : flex;
  text-align     : center;
  justify-content: space-around;
  align-items    : flex-start;
}

.inks_contents {

  img {
    width        : calc(var(--bv) * 30);
    margin-bottom: var(--sp-medium);
  }
}

.links_list_title  {
  font-size    : var(--fs-larger);
  margin-bottom: var(--sp-large);
}

.links_list {
  display       : flex;
  flex-direction: column;
  gap           : var(--sp-small);

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: var(--sp-larger);
  }
}
</style>