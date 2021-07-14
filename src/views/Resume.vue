<template>
  <div :class="{ dark: isDark }">
    <p
      class="
        pt-28
        flex
        items-center
        justify-center
        text-indigo-600
        font-semibold
        text-5xl
        md:text-2xl
        min-h-screen
      "
    >
      Resume Will Be Added Soon
    </p>
  </div>
</template>


<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    // Init store
    const store = useStore();
    //  If Dark Mode
    var isDark = computed(() => store.state.isDark);

    return { isDark };
  },
};
</script>

