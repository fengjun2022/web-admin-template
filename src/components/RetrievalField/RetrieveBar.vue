<template>
  <div>
    <!-- 搜索和重置按钮部分 -->
    <div :class="{'bg-white':!themeConfig.isDark}" class=" w-full mb-1 p-5 flex justify-between place-items-center h-16head-bar">
      <!-- 用户名输入字段 -->

      <div class="flex w-fit">

        <template v-for="(item,index) in props.bars" :key="index">
          <div v-if="item.type === RetrieveBartType.input " class="flex w-fit ml-2">
            <span class="whitespace-nowrap mr-2 text-[14px] align-middle leading-loose">{{ item.text }}:</span>
            <el-input v-model="item.model.value" @change="item?.changeCallback" clearable class="!w-[250px] !h-[30px]"
                      :placeholder="'请输入'+item.text"></el-input>
          </div>

          <div v-else-if="item.type === RetrieveBartType.select " class="flex w-fit ml-2">
            <span class="whitespace-nowrap mr-2 text-[14px] align-middle leading-loose">{{ item.text }}:</span>
            <el-select clearable v-model="item.model.value" class="!w-[250px] !h-[30px]" :placeholder="'请选择'+item.text"
                       @change="item?.changeCallback">
              <el-option
                  v-for="item in item.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>

          <div v-else-if="item.type===RetrieveBartType.datePicker" class="flex w-fit ml-2">
            <span class="whitespace-nowrap mr-2 text-[14px] align-middle leading-loose">{{ item.text }}:</span>
            <el-date-picker
                v-model="item.model.value"
                @change="item?.changeCallback"
                type="daterange"
                range-separator="到"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                :shortcuts="shortcuts"
            />
          </div>
        </template>


      </div>
      <!-- 搜索和重置按钮 -->
      <div>
        <el-button @click="searchCallback" type="primary">搜索</el-button>
        <el-button @click="reset">重置</el-button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {onMounted, onUnmounted, onBeforeMount, onBeforeUpdate, onUpdated, computed, defineEmits} from 'vue';
import {datePickerOption, inputOption, selectOption} from "@/components/RetrievalField/type";
import {RetrieveBartType} from "@/components/RetrievalField/class/RetrieveBartType.ts";
import {shortcuts} from "@/components/RetrievalField/constant";
import {layoutRouterSetting} from "@/store/settings/layoutRouterSetting";

const settingsStore = layoutRouterSetting();
const themeConfig = computed(() => settingsStore.themeConfig);

const props = withDefaults(defineProps<{
  bars: (inputOption | selectOption | datePickerOption) [];
  searchCallback: () => void
}>(), {})

const emit = defineEmits(['reset'])


/**
 * 重置搜索表单
 */
const reset = () => {
  props.bars.forEach(item => item.model.value = null)
  emit('reset')
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


<style scoped lang="scss">

</style>
