<script setup>

</script>
 
<template>
  <div
    class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
  >
    <div
      class="relative dark:bg-gray-800 bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max sm:rounded-lg sm:px-10"
    >
      <div class="divide-y divide-gray-300/50">
        <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
          <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="#" class="flex items-center">
              <span
                class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
              >COLORS</span>
            </a>
            <div class="w-full md:block md:w-auto">
              <ul
                class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
              >
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >Generate</a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >Explore</a>
                </li>

                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >Game</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="grid grid-cols-2 gap-4 space-y-6 py-8 text-gray-900">
          <div>
            <h1 class="font-extrabold leading-tight text-5xl mt-0 mb-2 dark:text-white">Colors.</h1>
            <p class="font-semibold leading-8 mt-0 mb-5 dark:text-white">
              Create the perfect palette or get
              <br />inspired by much of beautiful color schemes.
            </p>
            <button
              type="button"
              class="dark:text-white font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >Generate !</button>
            <button
              type="button"
              class="dark:text-white font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >Explore !</button>
          </div>
          <div>
            <img src="./assets/logo.png" alt />
          </div>
        </div>
      </div>
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