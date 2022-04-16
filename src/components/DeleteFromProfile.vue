<script setup>
defineEmits(['deleteColor'])
defineProps({
    colorUserList: {
        type: Array,
        require: true,
    },
});
const deleteAleart = () => {
    alert('Delect Success !')
}
</script>
 
<template>

    <div v-for="(colorUser, index) in colorUserList" :key="index">

        <button @click="$emit('deleteColor', colorUser.id); deleteAleart()"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Delete</button>

    </div>

</template>
 
<style>
</style>