<script setup>
defineEmits(['addGenColor'])
defineProps({
    exploreList: {
        type: Array,
        require: true
    }
})
</script>
 
<template>
    <div class="grid grid-cols-3 gap-6">
        <div
            class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            v-for="(colorExplore, index) in exploreList"
            :key="index"
        >
            <div class="grid grid-cols-5 py-8">
                <!-- <div class="grid grid-cols-5"> -->
                <div v-for="(colorPalette, index) in colorExplore.colorPalettes" :key="index">
                    <div
                        class="inline py-8  text-xs rounded-lg hover:text-white"
                        v-bind:style="{ 'background-color': `${colorExplore.colorPalettes[index]}` }"
                    >{{ colorPalette.toUpperCase() }}</div>
                </div>
            </div>
            <div>
                <router-link
                    :to="{ name: 'GenerateColor' }"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                    <button
                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        @click="$emit('addGenColor', colorExplore)"
                    >Generate Color</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
 
<style>
</style>