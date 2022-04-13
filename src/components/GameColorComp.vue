<script setup>

</script>
 
<template>
<div>
<div class="flex justify-end">
            <button type="button" data-modal-toggle="color">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-paint-bucket"
                viewBox="0 0 16 16"
              >
                <path
                  d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z"
                />
              </svg>
            </button>
            <button type="button" data-modal-toggle="defaultModal">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
           <!-- Modal -->
  <div
    id="defaultModal"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
  >
    <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">How To Play!</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="defaultModal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <p class="text-base leading-relaxed text-gray-500 dark:text-white">
            <b>🎨 Description:</b>
            <br />Guess the COLORS ! . If you are correct you got a point if not point will deduct.
          </p>
          <p class="text-base leading-relaxed text-gray-500 dark:text-white">
            <b>🎨 How to play:</b>
            <br />1. Each day we will randomly pick up 1 color, the player must guess the color to match the random color . Players must type their guessed color in the Input Colors box and then press Check it button.
            <br />2. If the player guesses wrong 3 times, there will be a hint. is the number of characters of that color
            <br />3. You will get the scores when guessing correctly.
            <br />
            <br />
            <b>Notice !</b> You can guess it for 5 times .
          </p>
        </div>
      </div>
    </div>
  </div>
  <div>
  <div
    id="color"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
  >
    <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
      <!--color all-->
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
          <h3
            class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white"
          >List of Colors !!</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="color"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-6">
          <p class="text-base leading-relaxed text-gray-500 dark:text-white">
            <b>🎨 Description:</b>
            <br />Hint :your answer are in this !
          </p>
          <!-- <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400"> -->
          <div class="grid grid-rows-6 gap-1 grid-cols-6 break-normal">
            <div
              v-for="(colors, index) in colors"
              :key="index"
              class="border border-500 rounded-lg text-sm px-1 py-2.5 mr-2 mb-2 p-2"
              :style="{ 'color': 'white', 'border-color': colors, 'background-color': colors, 'text-shadow': '2px 2px 8px rgba(128,128,128,0.7)' }"
            >{{ colors }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>
 
<style>

</style>