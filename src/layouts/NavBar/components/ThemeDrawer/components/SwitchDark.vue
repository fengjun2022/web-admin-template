<template>
  <el-switch
    v-model="themeConfig.isDark"
    @change="onAddDarkChange"
    inline-prompt
    :active-action-icon="Sunny as unknown as string"
    :inactive-action-ico="Moon"
  />
</template>

<script setup lang="ts" name="SwitchDark">
import { computed } from "vue";
import { layoutRouterSetting } from "@/store/settings/layoutRouterSetting";
import { Sunny, Moon } from "@element-plus/icons-vue";

import { useTheme } from "@/hooks/useTheme";
import { ThemeConfigProps } from "@/types/store";

const settingsStore = layoutRouterSetting();

const { switchDark } = useTheme();

const themeConfig = computed((): ThemeConfigProps => settingsStore.themeConfig);

const onAddDarkChange = () => {
  switchDark();
};
</script>
