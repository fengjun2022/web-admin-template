<template>
  <div>

  </div>
</template>

<script setup lang="ts">
import {
  ref,
  onMounted,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  watch, reactive, nextTick,
} from "vue";

// 创建响应式数据
const state = ref("Hello, Vue 3！");

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

// 侦听器
watch(state, (newValue, oldValue) => {
  console.log(`state 值从 ${oldValue} 变更为 ${newValue}`);
  // 当 state 值变化时执行的代码
});

/**
 * 这只是一个接口调用使用案例
 */

// interface a {
//   name: string
//   passWord: string
// }

// let get = async () => {
//   const ab = await user<a>()
//   ab.result.passWord
// }
// get()
</script>

<style scoped></style>
