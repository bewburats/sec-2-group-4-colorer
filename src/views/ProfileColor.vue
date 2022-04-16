<script setup>
import DeleteFromProfile from '../components/DeleteFromProfile.vue';
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const showSaveColors = ref([]);
//get Data
const getSaveColors = async () => {
    const res = await fetch('http://localhost:5000/savedColors')
    if (res.status === 200) {
        showSaveColors.value = await res.json()
        // console.log(showSaveColors.value)
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
    <div class="text-center dark:text-white">
        <h1 class="text-center text-xl dark:text-white font-semibold">Your Color Palettes</h1>
        <p>Palettes Color that you save in generate!</p>
        <br>
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
                <DeleteFromProfile :colorUserList="showSaveColor" @deleteColor="removeColorSave" />
            </div>
        </div>
    </div>
</template>

<style>
</style>
