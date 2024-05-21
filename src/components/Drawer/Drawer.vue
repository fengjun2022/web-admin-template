<template>
  <div>
    <el-drawer v-model="drawer" :direction="direction">
      <template #header>
        <div class="border-b border-[#eee] border-double h-10 w-full">
          <h3>{{ Props?.title }}</h3>
        </div>
      </template>

      <template #default>
        <slot name="body"></slot>
      </template>

      <template #footer>
        <div style="flex: auto">
          <el-button @click="cancelClick">取消</el-button>
          <el-button type="primary" @click="confirmClick">提交</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import {
  onMounted,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  ref,
} from "vue";

import {Methods} from "@/class/methods";
import mittBus from '@/utils/mitt'


interface propsOption {
  title?: string;
  callBack?: () => any;
}

const Props = withDefaults(defineProps<propsOption>(), {
  title: "默认标题",
  callBack: () => {
  },
});

const drawer = ref(false);
const direction = "rtl";

const res = ref();

async function cancelClick() {
  drawer.value = false;
  res.value = await Props?.callBack();

}

mittBus.on(Methods.openDrawer, () => {
  drawer.value = true
});

defineExpose({
  res
})


function confirmClick() {
}

// 生命周期钩子
onBeforeMount(() => {
  // 在组件挂载前执行的代码
});

onMounted(() => {
  // 在组件挂载后执行的代码
});

onBeforeUpdate(() => {
  // 在组件更新前执行的代码
});

onUpdated(() => {
  // 在组件更新后执行的代码
});

onUnmounted(() => {
  // 在组件卸载前执行的代码
});
</script>

<style scoped lang="scss"></style>
