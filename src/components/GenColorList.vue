<script setup>
defineEmits(['deleteColor', 'editColor'])
defineProps({
    colorList: {
        type: Array,
        require: true
    }
})
</script>
 
<template>
    <div v-for="(color, index) in colorList" :key="index">
        <div v-bind:style="{ 'background-color': color }">&nbsp;</div>
        <button @click="$emit('editColor', color)">Edit</button>
        <button @click="$emit('deleteColor', color.id)">Delete</button>
        <!-- <button @click="addColorToList(index)">edit</button> &nbsp;
        <button @click="deleteColorList(index)">delete</button>-->
    </div>
</template>
 
<style>
</style>