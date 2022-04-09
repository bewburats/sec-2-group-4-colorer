<script setup>
import ButtonColor from '../components/ButtonColor.vue';
</script>
 
<template>
  <div class="divide-y divide-gray-300/50">
    <div class="grid grid-cols-2 gap-4 space-y-6 py-8 text-gray-900">
      <div>
        <h1 class="font-extrabold leading-tight text-5xl mt-0 mb-2 dark:text-white">Colors.</h1>
        <p class="font-medium leading-8 mt-0 mb-5 dark:text-white">
          Create the perfect palette or get
          <br />inspired by much of beautiful color schemes.
        </p>
        <ButtonColor name="Generate !" link="GenerateColor"/>
        <ButtonColor name="Explore !"  link="ExploreColor"/>
      </div>
      <div>
        <img class="object-contain w-24 h-24 md:w-48 md:h-auto  mx-auto" src="../assets/homecolor.png" alt="" width="384" height="512">
  <!-- <div class="pt-6 md:p-8 text-center md:text-left space-y-4"> -->
        <!-- <img src="../assets/proj1.png" alt=""> -->
        <!-- รูปจากน้องกัส -->
      </div>
    </div>
  </div>
</template>
 
<style>
</style>