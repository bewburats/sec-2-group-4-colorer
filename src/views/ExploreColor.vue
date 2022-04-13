<script setup>
import { onBeforeMount,ref } from 'vue';
import ExploreList from '../components/ExploreList.vue';
// const colorExplores = 
// [
//     { id: 1, colorPalettes: ['#d8e2dc', '#ffe5d9', '#ffcad4', '#f4acb7', '#9d8189'] },
//     { id: 2, colorPalettes: ['#f6bd60', '#f7ede2', '#f5cac3', '#84a59d', '#f28482'] },
//     { id: 3, colorPalettes: ['#0fa3b1', '#d9e5d6', '#eddea4', '#f7a072', '#ff9b42'] },
//     { id: 4, colorPalettes: ['#1f2421', '#216869', '#49a078', '#9cc5a1', '#dce1de'] },
//     { id: 5, colorPalettes: ['#dcdcdd', '#c5c3c6', '#46494c', '#4c5c68', '#1985a1'] },
//     { id: 6, colorPalettes: ['#1a1423', '#372549', '#774c60', '#b75d69', '#eacdc2'] }
// ]

const getColors= async () => {
  const res = await fetch('http://localhost:5000/colors') //มี await ต้องเปลี่ยนฟังก์ชั่นให้เป็น async
  if (res.status === 200) {
    colors.value = await res.json() //json() getdata + covert to Js Obj.
    console.log(colors.value);
  }
  else
    console.log('not get colors');
}
onBeforeMount(async () => {
  await getColors()
})
const genColor = ref({})
const togenerateMode = (toGenColor) => {
    genColor.value = toGenColor
    console.log(genColor.value);
}

</script>

<template>
    <div class="text-center">
        <p class="text-2xl">Trending Color Palettes</p>
        <p>Get inspired by thousands of beatiful color schemes and make something cool!</p>
        <br />
        <div>
            <ExploreList :exploreList="colors" @addGenColor="togenerateMode" />
        </div>
    </div>
</template>
 
<style>
</style>