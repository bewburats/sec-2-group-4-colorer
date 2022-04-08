<script setup>
import { ref } from 'vue'

const color = ref("#000000");
const colorLists = ref([])

const addColorToList = ()=> {
    colorLists.value.push(color.value)
    console.log(colorLists.value)
}
</script>
 
<template>
    <div class="grid grid-cols-3 gap-4 space-y-6 py-8 text-gray-900">
        <div>
            <h1
                class="font-extrabold leading-tight text-xl mt-0 mb-2 dark:text-white"
            >Generate your color</h1>
            <div class="font-medium leading-8 mt-0 mb-5 dark:text-white">
                input color:
                <input type="color" v-model="color" />
                {{ color }}
            </div>
            <button @click="addColorToList">add</button>
        </div>
        <div class="hr-outside">
            <div class="hr-inside"></div>
        </div>
        <div>
            <div v-for="colorList in colorLists" :key="index">
                <div id="colorGen" v-bind:style="{ 'background-color': colorList }">&nbsp;</div>
                <button>edit</button> &nbsp;
                <button>delete</button>
            </div>
        </div>
    </div>
</template>
<style>
.hr-inside{
    height: 200px;
    width: 1px;
    background-color: grey;
    display: block;
}
.hr-outside{
    text-align: center;
}
</style>