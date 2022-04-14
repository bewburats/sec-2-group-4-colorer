<script setup>
import { onBeforeMount, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
const route = useRoute();
defineEmits(["deleteColor", "editColor"]);

const colorLists = ref([]);

const getColorFromDb = async (colorId) => {
  const res = await fetch(`http://localhost:5000/colors/${colorId}`);
  if (res.status === 200) {
    let data = await res.json();
    console.log(data);
    colorLists.value = data.colorPalettes;
    console.log(colorLists.value);
  } else {
    console.log("not get colorList");
  }
};
onBeforeMount(async () => {
  if (route.query.colorExploreId) {
    await getColorFromDb(route.query.colorExploreId);
  } else {
    await getColorFromDb(1);
  }
});

const color = ref("#007770");  //สีเริ่มต้นที่โชว์ให้ยูสเชอร์เห็น

const AddisDisabled = ref(true)  //การแสดงผลของปุ่ม add
const SaveisDisabled = ref(false) //การแสดงผลของปุ่ม save
const currentColor = ref(0); //เอาไว้เซฟตำแหน่งที่เลือก edit 

//add และ edit  โดยในปุ่ม add จะส่ง index=7 ส่วน editจะส่ง index= 1-6 (เรากำหนดไม่ให้มีสีเกิน6อันในพาเหลด)
const addColorToList = (index) => {

  //เช็คว่าถ้าอันเลย์นั้นไม่เต็ม 6 และ กดปุ่มadd มาก็จะเพิ่มปกติ
  if (colorLists.value.length < 5 && index == 7) {
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
  colorLists.value.splice(index, 1);
}

//กดเซฟหลังจาก edit --> เลือกสีใหม่
const saveColorList = () => {
  colorLists.value[currentColor.value] = color.value //แก้ไขอันเลย์
  color.value = " "   //เปลี่ยนสีที่โชว์ให้เป็นสีดำ เพื่อให้ยูสเชอร์เข้าใจว่าเปลี่ยแล้ว
  AddisDisabled.value = true  //หลังจากเซฟเสร็จ ก็เปิดปุ่ม add ให้แสดง
  SaveisDisabled.value = false //หลังจากเซฟเสร็จ ก็ซ่อนปุ่มเซฟ
}

const savetoProfile = () => { }

</script>

<template>
  <div>
    <h1 class="text-center text-2xl dark:text-white">Generate your color</h1>
    <div class="grid grid-cols-2 gap-1 space-y-6 text-gray-900 dark:text-white">
      
      <div>
        <br ><p class="font-extrabold  text-gray-700 text-xl dark:text-white">choose your color</p>
        
        <br>
        <div class="flex flex-row gap-2 font-medium mt-0 mb-5 dark:text-white">
          <input id="inputColor" class="" type="color" v-model="color" />
          <input type="text" class="text-black" v-model="color" placeholder="input color" />
        </div>
        <button
          class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center mr-2 mb-2"
          @click="addColorToList(7)" v-if="AddisDisabled" :disabled="disAdd">add</button>
        <button
          class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center mr-2 mb-2"
          @click="saveColorList" v-if="SaveisDisabled">update</button>
        <button
          class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center mr-2 mb-2"
          @click="savetoProfile(index)">save to profile</button>
      </div>

      <!-- <div class="hr-outside">
        <div class="hr-inside"></div>
      </div> -->
      <div class="grid grid-cols-3 gap-1">
        <div v-for="(color, index) in colorLists" :key="index">
          <div>
            <div v-bind:style="{ 'background-color': color }" class="box-content h-20 w-20 p-4 border border-inherit">
            </div>
            <button
              class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center mr-2 mb-2"
              @click="addColorToList(index)">edit</button>
            <button
              class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center mr-2 mb-2"
              @click="deleteColorList(index)">delete</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style>
</style>
