<script setup>
import { onBeforeMount, ref } from "vue";
import SavetoProfile from "../components/SavetoProfile.vue";
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
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>
