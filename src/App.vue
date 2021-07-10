<template>
  <div class="font-montserrat" :class="{'bg-black': isDark }">
    <Navbar />
    <div class="min-h-screen">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script>
import "./assets/tailwind.css";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  components: {
    Navbar,
    Footer,
  },
  setup() {
    // Init store
    const store = useStore();
    //  If Dark Mode
    var isDark = computed(() => store.state.isDark);
    return { isDark };
  },
};
</script>
