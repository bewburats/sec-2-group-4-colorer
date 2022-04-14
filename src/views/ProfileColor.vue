<script setup>
import { onBeforeMount, ref } from "vue";
import SavetoProfile from "../components/SavetoProfile.vue";
const saveColors = ref([]);
//get Data
const getSaveColors = async () => {
    const res = await fetch('http://localhost:5000/savedColors')
    if (res.status === 200) {
        saveColors.value = await res.json()
        console.log(saveColors.value)
    } else {
        console.log("not get saveColors")
    }
}
onBeforeMount(async () => {
    await getSaveColors()
})

//create
const savetoProfile = async (newPalettes) => {
    const res = await fetch('http://localhost:5000/savedColors', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ savedPalettes: newPalettes })
    })
    if (res.status === 200) {
        const savedPalette = await res.json()
        saveColors.value.push(savedPalette)

        console.log('saved successfully')
    }
} 
</script>

<template>
    <div class="text-center dark:text-white">
        <p class="text-2xl ">Your Color Palettes</p>
        <br />
        <div>
            <SavetoProfile 
            :savedColorList="saveColors"
            @savedColor = "savetoProfile"
            />
        </div>
    </div>
</template>

<style>
</style>
