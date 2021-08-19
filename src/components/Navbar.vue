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
        z-10
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
        <!-- Toggle theme buttons -->
        <div class="w-full flex justify-end items-center ml-1">
          <div class="cursor-pointer" @click="toggleTheme">
            <!-- Sun icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="h-7 w-7 sunIcon"
              v-if="isDark"
            >
              <g>
                <path
                  fill="#fff"
                  d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
                ></path>
                <path
                  fill="#fff"
                  d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"
                ></path>
              </g>
            </svg>
            <!-- Moon icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="h-7 w-7 moonIcon"
              v-else
            >
              <g>
                <path
                  fill="#fff"
                  d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
                ></path>
                <path
                  fill="#fff"
                  d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <!-- Toggle Button -->
        <div class="flex justify-between md:ml-4">
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
          <li
            v-for="item in navLinks"
            :key="item.tag"
            class="nav-item ml-4 linkHover md:mt-2"
          >
            <router-link :to="item.to" class="tracking-widest">{{
              item.tag
            }}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
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
      localStorage.setItem("darkMode", true);
      store.dispatch("tryUpdate", true);
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
    //Toggle Navbar when clicking outside
    onMounted(() => {
      document.getElementById("main-view").addEventListener("click", () => {
        if (toggleNav.value) {
          toggleNav.value = false;
        }
      });
    });
    // Navbar links
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

.sunIcon
  animation: 0.5s ease-in-out both icon-rotate
@keyframes icon-rotate
  0%
    opacity: 0
    transform: rotate(0deg)

  100%
    opacity: 1
    transform: rotate(90deg)
.moonIcon
  animation: 0.5s ease-in-out both icon-scale
@keyframes icon-scale
  0%
    opacity: 0
    transform: scale(0)

  100%
    opacity: 1
    transform: scale(1)
</style>