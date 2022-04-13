<script setup>
import { onBeforeMount, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
const route = useRoute();
defineEmits(["deleteColor", "editColor"]);
const props = defineProps({
  colorList: {
    type: Array,
    require: true,
  },
});
const colorList = ref({});

const getColorFromDb = async (colorId) => {
  const res = await fetch(`http://localhost:5000/colors/${colorId}`);
  if (res.status === 200) {
    let data = await res.json();
    console.log(data);
    colorList.value = data.colorPalettes;
    console.log(colorList.value);
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
</script>

<template>

  <div v-for="(color, index) in colorList" :key="index">
    <div>
      <div v-bind:style="{ 'background-color': color }" class="box-content h-20 w-20 p-4">&nbsp;</div>
      <br><button type="button"
        class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center mr-2 mb-2"
        @click="$emit('editColor', color)">Edit</button>
      <button type="button"
        class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center mr-2 mb-2"
        @click="$emit('deleteColor', color.id)">Delete</button>
      <!-- <button @click="addColorToList(index)">edit</button> &nbsp;
        <button @click="deleteColorList(index)">delete</button>-->
    </div>
  </div>
</template>

<style>
</style>
