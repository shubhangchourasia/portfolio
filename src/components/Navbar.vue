<template>
  <div :class="{ dark: isDark }">
    <!-- Navbar Starts -->
    <nav
      class="
        flex
        py-5
        md:flex-wrap
        fixed
        left-0
        right-0
        bg-indigo-600
        dark:bg-black
      "
    >
      <div class="brand w-full relative flex justify-between">
        <!-- Logo -->
        <div class="ml-2">
          <router-link to="/">
            <img
              src="../assets/logo.png"
              alt="Logo"
              class="h-10 rounded-md ml-4"
            />
          </router-link>
        </div>
        <!-- Toggle Button -->
        <button
          class="button ml-auto hidden md:block mx-9"
          @click="toggleNavbar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 tbtn"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
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
            stroke="#fff"
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
        class="links flex items-center md:w-screen"
        :class="{ 'md:hidden': !toggleNav, 'md:flex': toggleNav }"
      >
        <ul
          class="
            flex
            md:flex-col
            ml-auto
            md:mx-auto
            md:items-center
            mx-9
            text-white
            font-bold
          "
        >
          <li class="nav-item ml-4 md:mt-2 cursor-pointer" @click="toggleTheme">
           
            <!-- Sun icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="#fff"
                       v-if="isDark"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              />
            </svg>
             <!-- Moon icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="#fff"
              v-else
     
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
          </li>
          <li
            v-for="item in navLinks"
            :key="item.tag"
            class="nav-item ml-4 linkHover md:mt-2"
          >
            <router-link :to="item.to">{{ item.tag }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "Navbar",
  setup() {
    // Init store
    const store = useStore();
    //  If Dark Mode
    var isDark = computed(() => store.state.isDark);

    //Check for theme in localStorage
    const theme = JSON.parse(localStorage.getItem("darkMode"));
    if (theme != null) {
      // Set theme in store
      store.dispatch("tryUpdate", theme);
    } else {
      localStorage.setItem("darkMode", false);
      store.dispatch("tryUpdate", false);
    }

    const toggleTheme = () => {
      //Set theme in localStorage
      localStorage.setItem("darkMode", !isDark.value);
      //Set theme in store
      store.dispatch("tryUpdate", !isDark.value);
    };

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
    return { isDark, toggleNav, toggleNavbar, navLinks, toggleTheme };
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