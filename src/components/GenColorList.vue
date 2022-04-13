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
  }
});
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

<style></style>
