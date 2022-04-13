<script setup>
import { ref } from 'vue';
defineProps({
  colorHint: {
    type: Array,
    require: true,
  },
});
const isShow = ref(false);
function isShowColor() {
  if (isShow.value === false) {
    isShow.value = true
  } else {
    isShow.value = false
  }

}
</script>
 
<template>
  <div>

    <div>
      <br>
      <b>🎨 Hint:</b>
      <br />your answer are in this !
    </div>
    <div>
      <button type="button"  @click="isShowColor" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"> Show / Hide colors </button>
      <div v-show="isShow" class="grid grid-rows-6 gap-1 grid-cols-6 break-normal">
        <div v-for="(colors, index) in colorHint" :key="index"
          class="border border-500 rounded-lg text-sm px-1 py-2.5 mr-2 mb-2 p-2"
          :style="{ 'color': 'white', 'border-color': colors, 'background-color': colors, 'text-shadow': '2px 2px 8px rgba(128,128,128,0.7)' }">
          {{ colors }}
        </div>
      </div>
    </div>
  </div>



</template>
 
<style>
</style>