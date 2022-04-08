<script setup>
defineProps ( {
    name :{
        type:String 
        
    }
      ,
      link : {
          type:String
      }
})
</script>
 
<template>

   <router-link :to="{name : link}">
 <button
              type="button"
              class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >{{name}}</button>


         </router-link>
               

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