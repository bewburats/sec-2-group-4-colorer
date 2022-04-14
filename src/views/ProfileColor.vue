<script setup>
import { onBeforeMount, ref } from "vue";
const showSaveColors = ref([]);
//get Data
const getSaveColors = async () => {
    const res = await fetch('http://localhost:5000/savedColors')
    if (res.status === 200) {
        showSaveColors.value = await res.json()
        console.log(showSaveColors.value)
    } else {
        console.log("not get saveColors")
    }
}
onBeforeMount(async () => {
    await getSaveColors()
})

//delete data
const removeColorSave = async (removeSaveColorId) => {
  const res = await fetch(`http://localhost:5000/savedColors/${removeSaveColorId}`, {
    method: 'DELETE'
  })
  if (res.status === 200) {
    showSaveColors.value = showSaveColors.value.filter((showSaveColor) => showSaveColor.id !== removeSaveColorId)
    console.log('deleted');
  }
  else console.log('error,cannot delete');
}
</script>

<template>
    <div>
        <div class="text-center dark:text-white">
            <p class="text-2xl ">Your Color Palettes</p>
            <div class="grid grid-cols-3 gap-6">
                <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                    v-for="(showSaveColor, index1) in showSaveColors" :key="index1">

                    <div class="grid grid-cols-5 py-8">
                        <div v-for="(showSavePalette, index2) in showSaveColor.savedPalettes" :key="index2">


                            <div class="inline py-8 text-xs rounded-lg hover:text-white"
                                v-bind:style="{ 'background-color': `${showSavePalette}` }">
                                {{ showSavePalette.toUpperCase() }}
                            </div>

                        </div>
                    </div>
                    <!-- น่าจะต้องสร้าง component ใหม่มั่ง  -->
                    <button @click="removeColorSave(1)"
                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>
