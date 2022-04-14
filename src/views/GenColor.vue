<script setup>
import { ref } from 'vue'
// import AddEditGenColor from '../components/AddEditGenColor.vue'
import GenColorList from '../components/GenColorList.vue'

</script>
 
<template>
    <!-- <h1 class="font-extrabold leading-tight text-xl dark:text-white">Generate your color</h1>
    <div class="grid grid-cols-2 gap-1 space-y-6 py- text-gray-900">
        <div>
            <div>
                <br />Choose color: -->
                <!-- <div id="containInputColor" class="font-medium leading-8 mt-0 mb-5 dark:text-white">
                <input id="inputColor" type="color" v-model="color" />
                <input type="text" v-model="color" />
            </div>
            <button @click="addColorToList(7)" v-if="AddisDisabled">add</button>
            <br />
            <button @click="saveColorList" v-if="SaveisDisabled">save</button>-->
                <!-- <AddEditGenColor @addColor="addColorToList(7)" :currentGenColor="colorLists"
                    @updateColor="saveColorList" />
            </div>
        </div> -->
        <!-- <div class="hr-outside">
            <div class="hr-inside"></div>
        </div> -->
        <!-- <div class="col-start-2 col-end-3 grid grid-cols-5"> -->
            <GenColorList  
                 />
            <!-- <div v-for="(colorList, index) in colorLists" :key="index">
                <div v-bind:style="{ 'background-color': colorList }">&nbsp;</div>
                <button @click="addColorToList(index)">edit</button> &nbsp;
                <button @click="deleteColorList(index)">delete</button>
            </div>-->
        <!-- </div> -->
        
    <!-- </div> -->
</template>
<style>
.hr-inside {
    height: 200px;
    width: 1px;
    background-color: grey;
    display: block;
}

.hr-outside {
    text-align: center;
}

#inputColor {
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    /* border-radius: 15px; */
    /* background-color: transparent; */
    height: 70px;
    width: 70px;
    cursor: pointer;
}
</style>