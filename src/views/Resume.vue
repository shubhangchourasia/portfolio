<template>
  <div
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
    Resume Will Be Added Soon -- {{ item }}
  </div>
  <div
    class="
      flex
      justify-center
      text-indigo-600
      font-semibold
      text-5xl
      md:text-2xl
    "
  >
    <div v-if="item">True</div>
    <div v-else>False</div>
    <button @click="asdf">Click</button>
  </div>
</template>


<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const item = computed(() => store.state.isDark);
    // console.log("w", item.value);
    // console.log("e3", localStorage.getItem("qw"));
    const asdf = () => {
     
      store.dispatch("tryUpdate", true);
    };
    return { item, asdf };
  },
};
</script>

