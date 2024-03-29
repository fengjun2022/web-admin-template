import {defineStore} from "pinia";
import {StoreName} from "@/constant/StoreName";
import {computed, ref} from "vue";


export const loadingSetting = defineStore(StoreName.loading, () => {
  const loadingIndex = ref(false)

  const loading = computed(() => {
    return loadingIndex.value;
  });

  const isShow = () => {
    loadingIndex.value = true
  }

  const isHide = () => {
    loadingIndex.value = false


  }


  return {
    loading,
    isShow,
    isHide
  }

});
