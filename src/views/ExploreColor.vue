<script setup>
import { onBeforeMount, ref } from "vue";

import ExploreList from "../components/ExploreList.vue";
const colors = ref([]);
const getColors = async () => {
  const res = await fetch("http://localhost:5000/colors"); //มี await ต้องเปลี่ยนฟังก์ชั่นให้เป็น async
  if (res.status === 200) {
    colors.value = await res.json(); //json() getdata + covert to Js Obj.
    console.log(colors.value);
  } else console.log("not get colors");
};
onBeforeMount(async () => {
  await getColors();
});

</script>

<template>
  <div class="text-center dark:text-white">
    <p class="text-2xl ">Trending Color Palettes</p>
    <p>
      Get inspired by thousands of beatiful color schemes and make something
      cool!
    </p>
    <br />
    <div>
      <ExploreList :exploreList="colors" />
    </div>
  </div>
</template>

<style></style>
