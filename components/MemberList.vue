<script setup lang="ts">
type Props = {
  members: {name: string, text: string, image: string}[]
}

const props = withDefaults(defineProps<Props>(), {})
const targetElement = ref<HTMLElement | null>(null)
const elements = [
  targetElement,
]

onMounted(() => {
  useIntersectionObserver().doObserve(elements)
})

</script>

<template>
  <ul 
    ref="targetElement"
    :class="$style.member_list_wrapper"
  >
    <li 
      v-for="(member, index) in members"
      :key="member.name"
      :class="$style.member_list_card"
    >
      <img 
        v-if="member.image"
        :src="`/images/${member.image}`"
        :alt="member.name"
        :class="$style.member_list_pic"
      >
      <div :class="$style.member_list_contents">
        <h4>{{ member.name }}</h4>
        <p 
          v-html="member.text"
          :class="$style.member_list_text"
        />
      </div>
    </li>
    <!-- <li :class="$style.member_list_card">
      <img src="~/assets/images/no_image.png" alt="顔写真" :class="$style.member_list_pic">
      <div :class="$style.member_list_contents">
        <h4>理事／武者 慶佑</h4>
        <p :class="$style.member_list_text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
    </li>
    <li :class="$style.member_list_card">
      <img src="~/assets/images/no_image.png" alt="顔写真" :class="$style.member_list_pic">
      <div :class="$style.member_list_contents">
        <h4>理事／武者 慶佑</h4>
        <p :class="$style.member_list_text">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
      </div>
    </li> -->
  </ul>
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