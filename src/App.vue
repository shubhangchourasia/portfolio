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
import { ref } from "@vue/reactivity";
import "./assets/tailwind.css";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const isDark = ref(false);
    return { isDark };
  },
};
</script>
