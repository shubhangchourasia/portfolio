<template>
  <div :class="{ dark: isDark }">
    <div class="mt-20 py-20 bg-gray-100 dark:bg-black">
      <div class="text-center text-gray-700 font-semibold dark:text-gray-50">
        <div class="dark:text-gray-50 tracking-wider">
          &copy; 2021 Shubhang Chourasia
        </div>
        <div class="float-right mt-2 mr-10">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              class="btIcon"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm1-8v4h-2v-4H8l4-4 4 4h-3z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
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

<style lang="sass" scoped>
.btIcon
  fill: #7f7f7f
</style>