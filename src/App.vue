<script setup>
import Navbar from './components/Navbar.vue';

</script>
 
<template>

    <div
      class="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
    >
     <div class="absolute inset-0 bg-[url('../src/assets/paintbrush.png')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
    <!-- <img src="../src/assets/paintbrush.png" alt=""> -->
      <div
        class="relative dark:bg-gray-800 bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max sm:rounded-lg sm:px-10"
      >
        <Navbar />
        <router-view />
      </div>
    </div>
  
</template>
 
<style>
@import url("https://fonts.googleapis.com/css?family=Rubik");

html,
body {
  font-family: "Rubik", sans-serif;
}

#app {
  font-family: "Rubik", sans-serif;
}
</style>