<script setup>
import { ref } from 'vue'

import GenColorList from '../components/GenColorList.vue'

</script>
 
<template>

    <GenColorList />

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