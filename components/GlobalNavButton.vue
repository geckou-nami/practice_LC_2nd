<script setup lang="ts">
const isActive = ref(false);

const toggleMenu = () => {
  isActive.value = !isActive.value
  console.log(isActive.value)
  emit('emitEvent', isActive.value)
}

const emit = defineEmits<{
  (e: 'emitEvent', state: boolean): void
}>()

const links = [
  {
    name: 'NEWS',
    text: 'お知らせ',
  },
  {
    name: 'MEMBERS',
    text: '日本ライブコマース協会 会員',
  },
  {
    name: 'ACTIVITY',
    text: '活動内容',
  },
  {
    name: 'LINKS',
    text: '関連リンク',
  },
]

const pageScroll = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const elTop = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: elTop, left: 0, behavior: 'smooth' });
  }
};

const scrollToSection = (name: string): void => {
  pageScroll(name)
  isActive.value = false
  emit('emitEvent', false)
}

</script>

<template>
  <div :class="$style.global_nav_button">
    <button 
      :class="[$style.hamburger_menu, isActive ? $style.active : '']"
      @click="toggleMenu"
    >
      <span></span> 
      <span></span>
      <span></span>
    </button>
    <div :class="[$style.nav_list_wrapper, isActive ? $style.active : '']">
      <h1><img src="~/assets/images/logo_black.webp" alt="日本ライブコマース協会" :class="$style.main_logo"></h1>
      <dl :class="$style.nav_list">
        <div 
          v-for="link in links"
          :key="link.name"
          @click="scrollToSection(link.name)"
        >
          <dt>{{ link.name }}</dt>
          <dd>{{ link.text }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" module>
@use '~/assets/scss/mixin' as *;

.global_nav_button {
  display        : flex;
  justify-content: flex-end;
  align-items    : flex-start;
  /* width:100%;
  height:100%; */
  }

.hamburger_menu {
  --opacity   : 1;
  --rotate    : 0;
  --translate : .5rem;
  display     : grid;
  place-items : center;
  width       : 50px;
  aspect-ratio: 1;
  cursor      : pointer;
  z-index: 100;

  @include mediaScreen('tablet') {
    width : 40px;
  }

  &.active {
    --opacity  : 0;
    --rotate   : 135deg;
    --translate: 0;
  }

  span {
    display         : block;
    width           : 60%;
    height          : 3px;
    border-radius   : 10px;
    background-color: var(--pink);
    grid-area       : 1/1/-1/-1;
    
    &:nth-child(1) {
      opacity: var(--opacity);
    }
    &:nth-child(2) {
      translate: 0 calc(var(--translate) * -1);
      rotate   : var(--rotate);
    }
    &:nth-child(3) {
      translate: 0 var(--translate);
      rotate   : calc(var(--rotate) * -1);
    }
  }
}

.nav_list_wrapper {
  width          : 100%;
  height         : 100vh;
  display        : flex;
  flex-direction : column;
  align-items    : flex-start;
  gap            : var(--sp-large);
  padding-left   : calc(var(--bv) * 15);
  padding-top:calc(var(--bv) * 15);
  position       : fixed;
  top            : 0;
  left           : 0;
  opacity        : 0;

  &.active {
    opacity  : 1;
    transition: all .5s;
    transition-delay: .3s;
  }

  @include mediaScreen('tablet') {
    padding-left: calc(var(--bv) * 10);
    padding-top : calc(var(--bv) * 10);
  }
}

.main_logo {
  width        : calc(var(--bv) * 65);
  margin-bottom: var(--sp-medium);

  @include mediaScreen('tablet') {
    width        : calc(var(--bv) * 40);
  }
}

.nav_list {
  display       : flex;
  flex-direction: column;
  gap           : var(--sp-large);

  div {
    cursor: pointer;

    dt {
      font-family  : var(--font-family-rounded);
      font-size    : var(--fs-max);
      font-weight  : bold;
      color        : var(--pink);
    }

    dd {
      color        : var(--black);
    }
  }
}

/* @keyframes GlobalNavOpen {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(100);
  }
}
@keyframes GlobalNavClose {
  0% {
    transform: scale(100);
  }
  100% {
    transform: scale(1);
  }
} */
</style>