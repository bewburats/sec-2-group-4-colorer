<script setup>
import HomeColorVue from '../components/HomeColor.vue';
import ButtonColor from '../components/ButtonColor.vue';
</script>
 
<template>
<!-- <HomeColorVue /> -->

 <div class="divide-y divide-gray-300/50">
       
        <div class="grid grid-cols-2 gap-4 space-y-6 py-8 text-gray-900">
          <div>
            <h1 class="font-extrabold leading-tight text-5xl mt-0 mb-2 dark:text-white">Colors.</h1>
            <p class="font-medium leading-8 mt-0 mb-5 dark:text-white">
              Create the perfect palette or get
              <br />inspired by much of beautiful color schemes.
            </p>
            <ButtonColor name ="test"/>
            <ButtonColor name ="อิอิ"/>
          

          </div>
          <div>
            
          </div>
        </div>
      </div>

</template>
 
<style>

</style>