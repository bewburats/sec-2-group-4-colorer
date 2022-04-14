<script setup>
import { ref } from 'vue'
import AddEditGenColor from '../components/AddEditGenColor.vue'
import GenColorList from '../components/GenColorList.vue'
const color = ref("#000000");  //สีเริ่มต้นที่โชว์ให้ยูสเชอร์เห็น
const colorLists = ref([])  //อันเลย์รวมสี 
const AddisDisabled = ref(true)  //การแสดงผลของปุ่ม add
const SaveisDisabled = ref(false) //การแสดงผลของปุ่ม save
const currentColor = ref(0); //เอาไว้เซฟตำแหน่งที่เลือก edit 

//add และ edit  โดยในปุ่ม add จะส่ง index=7 ส่วน editจะส่ง index= 1-6 (เรากำหนดไม่ให้มีสีเกิน6อันในพาเหลด)
const addColorToList = (index) => {

    //เช็คว่าถ้าอันเลย์นั้นไม่เต็ม 6 และ กดปุ่มadd มาก็จะเพิ่มปกติ
    if (colorLists.value.length < 7 && index == 7) {
        colorLists.value.push(color.value)
        console.log(colorLists.value)
    }
    //เช็คว่าถ้ากดปุ่ม edit มา ก็จะทำงานส่วนนี้แทน
    if (index < 7) {
        color.value = colorLists.value[index] //เปลี่ยนสีที่โชว์ ให้สีเดียวกับที่เลือก edit
        currentColor.value = index  //เซฟตำแหน่ง index ที่เลือก edit 
        AddisDisabled.value = false  //ซ่อนปุ่มadd เมื่อกด edit
        SaveisDisabled.value = true  //แสดงปุ่ม save เมื่อกด edit
    }
}

//ลบสีออกจาก list 
const deleteColorList = (index) => {
    if (colorLists.value.length < 1) {
        colorLists.value.splice(0, index);
        console.log(colorLists.value)
    } else
        colorLists.value.shift();
}

//กดเซฟหลังจาก edit --> เลือกสีใหม่
const saveColorList = () => {
    colorLists.value[currentColor.value] = color.value //แก้ไขอันเลย์
    color.value = "#000000"   //เปลี่ยนสีที่โชว์ให้เป็นสีดำ เพื่อให้ยูสเชอร์เข้าใจว่าเปลี่ยแล้ว
    AddisDisabled.value = true  //หลังจากเซฟเสร็จ ก็เปิดปุ่ม add ให้แสดง
    SaveisDisabled.value = false //หลังจากเซฟเสร็จ ก็ซ่อนปุ่มเซฟ
}

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
            <GenColorList :colorList="colorLists" @deleteColor="deleteColorList(index)"
                @editColor="addColorToList(index)" />
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

#containInputColor {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

#inputColor {
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