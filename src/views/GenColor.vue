<script setup>
import { ref } from 'vue'

const color = ref("#000000");
const colorLists = ref([])

const addColorToList = ()=> {
    colorLists.value.push(color.value)
    console.log(colorLists.value)
}
</script>
 
<template><h1
                class="font-extrabold leading-tight text-xl dark:text-white"
            >Generate your color</h1>
    <div class="grid grid-cols-3 gap-4 space-y-6 py-2 text-gray-900">
        <div>
            <br>Choose color:
            <div id="containInputColor" class="font-medium leading-8 mt-0 mb-5 dark:text-white">
                
                <input id="inputColor" type="color" v-model="color" />
                <input type="text" v-model="color" > 
                 <!-- {{ color }} -->
              
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
#containInputColor{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
#inputColor{
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    border-radius: 15px;
    background-color: transparent;
    height: 50px;
    width: 50px;
    cursor: pointer;
}

</style>