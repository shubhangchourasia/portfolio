<template>
  <div :class="{ 'dark': isDark }">
    <!-- Navbar Starts -->
    <nav class="flex py-5 md:flex-wrap fixed left-0 right-0 bg-indigo-600 dark:bg-black">
      <div class="brand w-full relative flex justify-between">
        <!-- Logo -->
        <div class="ml-2">
          <router-link to="/">
            <img src="../assets/logo.png" alt="Logo" class="h-10 rounded-md ml-4" />
          </router-link>
        </div>
        <!-- Toggle Button -->
        <button class="button ml-auto hidden md:block mx-9" @click="toggleNavbar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 tbtn"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            v-if="!toggleNav"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 tbtn"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            v-else
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <!-- Links -->
      <div
        class="links flex items-center md:w-screen md:shadow-md"
        :class="{'md:hidden': !toggleNav, 'md:flex': toggleNav}"
      >
        <ul class="flex md:flex-col ml-auto md:mx-auto md:items-center mx-9 text-white font-bold">
          <li v-for="item in navLinks" :key="item.tag" class="nav-item ml-4 linkHover md:mt-2">
            <router-link :to="item.to">{{item.tag}}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Navbar",
  setup() {
    // If dark mode
    const isDark = ref(false);
    // Navbar toggle variable.
    const toggleNav = ref(false);
    // Navbar toggle function.
    const toggleNavbar = () => {
      toggleNav.value = !toggleNav.value;
    };

    const navLinks = [
      { tag: "Home", to: "/" },
      { tag: "About", to: "/#about" },
      { tag: "Skills", to: "/#skills" },
      { tag: "Portfolio", to: "/#portfolio" },
      { tag: "Contact", to: "/#contact" },
      // { tag: "Resume", to: "/resume" },
    ];
    return { isDark, toggleNav, toggleNavbar, navLinks };
  },
};
</script>

<style lang="sass" scoped>
.linkHover
  border-bottom: 3px solid transparent
  &:hover
    transition: 0.2s
    border-bottom: #FFF 3px solid

.tbtn
  animation: 0.5s ease-in-out both fade-in
@keyframes fade-in
  0%
    opacity: 0
    transform: rotate(0deg)

  100%
    opacity: 1
    transform: rotate(180deg)
</style>