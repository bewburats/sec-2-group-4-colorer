<script setup>
import { computed } from 'vue';
defineEmits(['addColor', 'updateColor'])
const props = defineProps({
    currentGenColor: {
        type: Array,
        default: []
    }
})
console.log(props.currentGenColor);

const newGenColor = computed(() => {
    console.log({ id: props.currentGenColor.id, colorPalettes: props.currentGenColor.colorPalettes });
    return { id: props.currentGenColor.id, colorPalettes: props.currentGenColor.colorPalettes }
})
console.log(newGenColor.value);
</script>
 
<template>
    <div>
        <div id="containInputColor" class="font-medium leading-8 mt-0 mb-5 dark:text-white">
            <input id="inputColor" type="color" v-model="color" />
            <input type="text" v-model="color" />
        </div>
        <button v-if="newGenColor.id > 0" @click="$emit('updateColor', newGenColor)">Update</button>
        <button v-else @click="$emit('addColor', newGenColor.colorPalettes)">Add</button>
    </div>
</template>
 
<style>
</style>