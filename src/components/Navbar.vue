<script setup>

</script>
 
<template>
<nav class="bg-white border-gray-200 px-1 sm:px-1 py-2.5 rounded dark:bg-gray-800">
          <div class="container flex flex-wrap justify-between items-center mx-auto">
              <router-link
                   :to="{name : 'Home'}" class="flex items-center">
      <img src="../assets/logo-color.png" class="mr-4 h-8 sm:h-11" alt="Colors Logo" />
   
  </router-link>
            
            <div class="w-full md:block md:w-auto">
              <ul
                class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
              >
                <li>
                
                  <router-link
                   :to="{name : 'GenerateColor'}"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >Generate</router-link>
                </li>
                <li>
                   <router-link
                   :to="{name : 'ExploreColor'}"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >Explore</router-link>
                </li>

                <li>
                   <router-link
                   :to="{name : 'GameColor'}"
                    class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-pink-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >Game</router-link>
                </li>
              </ul>
              
            </div>
          </div>
          <br><hr style="height:1px;border-width:0;background-color:gray">
        </nav>
</template>
 
<style>

</style>