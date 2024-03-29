<template>
  <section
    class="app-mian-height"
    :class="[routerSetting.collapse ? 'app-width-fold ' : 'app-width']"
  >
    <router-view v-slot="{ Component, route }" v-if="isShow">
      <transition appear name="fade-transform" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </section>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from "vue";
import { layoutRouterSetting } from "@/store/settings/layoutRouterSetting";

const settingsStore = layoutRouterSetting();
const isShow = ref(true);
watch(
  () => settingsStore.refresh,
  () => {
    isShow.value = false;
    nextTick(() => {
      isShow.value = true;
    });
  },
);
const routerSetting = layoutRouterSetting();
</script>

<style scoped lang="scss">
@import "@/styles/variable";

.app-mian-height {
  min-height: $base-app-main-height;
  padding: 20px;
}

.app-width-fold {
  width: calc(100vw - $base-left-menu-width-min - 40px);
}

.app-width {
  width: calc(100vw - $base-left-menu-width - 40px);
  //transition: width 0.3s ease-in-out;
}
</style>
