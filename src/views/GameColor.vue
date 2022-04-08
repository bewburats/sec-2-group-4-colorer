<script setup>
import { ref } from 'vue';

const colors =
  ['maroon', 'teal', 'blue', 'indigo', 'orange', 'black',
    'brown', 'green', 'navy', 'purple', 'yellow', 'gray',
    'red', 'seagreen', 'royalblue', 'orchid', 'gold', 'silver',
    'tomato', 'lime', 'steelblue', 'violet', 'olive', 'lavender',
    'coral', 'aquamarine', 'skyblue', 'plum', 'khaki', 'tan',
    'salmon', 'aqua', 'cyan', 'pink', 'beige', 'wheat',];

const totalpoint = ref(0);
totalpoint.value = localStorage.getItem('point');
const colorWord = ref('color 🇺🇸');
const colorWordHead = ref('');
const bgColor = ref('');
const answer = ref('');
const countTime = ref('');
const countPoint = ref(0);  /// score
const todayColor = ref(colors[getTodayColorIndex()]);
const countIncorrect = ref(0);
const isShowHint = ref(false);
const isCorrect = ref(false);
const isCheckedAnswer = ref(false);
const isShowAnswer = ref(false);

console.log(`Hint : ${todayColor.value}`);

// เฉลยของวันนั้นๆ
function getTodayColorIndex() {
  let days = new Date().getDate();
  let index = days % colors.length;
  return index;
}

// เปลี่ยนสีคำว่า colors 
function randColorHeadName() {
  // let colorHead = ['brown', 'pink', 'coral', 'green', 'red']
  let randColorHead = colors[Math.floor(Math.random() * colors.length)];
  colorWordHead.value = randColorHead;
}
//สุ่มคำว่า color แต่ละภาษาที่จะแสดงหน้าเว็บ
function randWebName() {
  let nationColor = ['颜 色 🇨🇳', 'colour 🇬🇧', 'color 🇺🇸', 'farbe 🇩🇪 ', 'couleur 🇫🇷', 'renk 🇹🇷', 'kleur 🇳🇱'];
  let randColorName = nationColor[Math.floor(Math.random() * nationColor.length)];
  colorWord.value = randColorName;
}

setInterval(randColorHeadName, 1000)
setInterval(randWebName, 2000);

//เช็ค localStorage
checkLocalStorage();
function checkLocalStorage() {
  if (!localStorage.point) {
    localStorage.point = 0
    totalpoint.value = localStorage.getItem('point');
  }
}

// เช็คคำตอบ
function checkGuessWord() {
  answer.value = answer.value.toLowerCase().trim()
  if (answer.value === todayColor.value) {
    if (isShowHint.value) {
      countPoint.value += 80;
      localStorage.point = localStorage.point ? +localStorage.point + 80 : 80;
    } else {
      countPoint.value += 100
      localStorage.point = localStorage.point ? +localStorage.point + 100 : 100;
    }
    bgColor.value = todayColor.value
    isCorrect.value = true;
    countIncorrect.value = 0;
    setLastPlay();
  } else {
    isCheckedAnswer.value = true;
    countIncorrect.value++
    if (countIncorrect.value >= 6) {
      // show answer
      isCheckedAnswer.value = false;
      isShowHint.value = false;
      isShowAnswer.value = true;
      setLastPlay();
    }
    else if (countIncorrect.value >= 3) {
      isShowHint.value = true;
    }
  }
  totalpoint.value = localStorage.getItem('point');
}

//คำนวณเวลาจนถึงเที่ยงคืนของวันนั้นๆ
function setTime() {
  let crrDate = new Date();
  let tmrDate = new Date(); //1837263
  tmrDate.setHours(24, 0, 0, 0);
  let diffMS = tmrDate.getTime() / 1000 - crrDate.getTime() / 1000;
  let diffHr = Math.floor(diffMS / 3600);
  diffMS = diffMS - diffHr * 3600;
  let diffMi = Math.floor(diffMS / 60);
  diffMS = diffMS - diffMi * 60;
  let diffS = Math.floor(diffMS);
  let result = ((diffHr < 10) ? "0" + diffHr : diffHr);
  result += ":" + ((diffMi < 10) ? "0" + diffMi : diffMi);
  result += ":" + ((diffS < 10) ? "0" + diffS : diffS);
  countTime.value = `${result}`
}
setInterval(setTime, 1000);

let isPlayedToday = ref(false);

function checkIsPlayedToday() {
  let lastPlay = localStorage.getItem('lastplayDate');
  if (lastPlay) {
    let objDate = new Date(lastPlay);
    let todayDate = new Date();
    if ((objDate.getDate() < todayDate.getDate()) && (objDate.getMonth() <= todayDate.getMonth()) && (objDate.getFullYear() <= todayDate.getFullYear())) {
      console.log('not played');
      isPlayedToday.value = false;
    } else {
      console.log('played');
      isPlayedToday.value = true;
      let lastPlayStatus = JSON.parse(localStorage.getItem('lastplayStatus')) || false;
      // if true = you correct in last play
      if (lastPlayStatus) {
        answer.value = todayColor.value;
        bgColor.value = todayColor.value
        isCorrect.value = true;
        countPoint.value = localStorage.getItem('lastplayPoint') || 0;
    
      } else {
        isCheckedAnswer.value = false;
        isShowHint.value = false;
        isShowAnswer.value = true;
      }
    }
  }
  else {
    console.log('not played');
    isPlayedToday.value = false;
  }
}
checkIsPlayedToday();
function setLastPlay() {
  localStorage.setItem('lastplayDate', new Date().toLocaleDateString());
  localStorage.setItem('lastplayStatus', isCorrect.value);
  localStorage.setItem('lastplayPoint', countPoint.value)
}
</script>
 
<template>
  <div
    id="back"
    class="min-h-screen w-screen w-100 bg-gray-50 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12"
    :style="{ 'background-color': bgColor }"
  >
    <div
      class="dark:bg-slate-800 dark:text-white md:w-96 md:h-auto relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10"
    >
      <div class="max-w-md mx-auto">
        <div class="flex justify-between">
          <div class="h-6 font-medium text-xl" :style="{ 'color': colorWordHead }">🎨 C O L O R S</div>
          <div div class="flex justify-end">
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
        </div>
        <br />
        <hr />
        <div class="divide-y divide-gray-300/50">
          <div class="dark:text-white py-8 text-base leading-7 space-y-6 text-gray-600">
            <p>Guess {{ colorWord }} !</p>
            <div class="grid grid-flow-col auto-cols-max">
              <div class="relative z-0 mb-6 w-full group md:w-auto">
                <input
                  @keyup="isCheckedAnswer = false;"
                  v-model="answer"
                  type="text"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Input Colors"
                  :style="{ 'color': answer }"
                  required
                  :disabled="isCorrect || isShowAnswer"
                />
              </div>
              <div v-show="!isCorrect && !isShowAnswer">
                <button
                  class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800"
                >
                  <span
                    @click="checkGuessWord"
                    class="px-8 relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-slate-800 rounded-md group-hover:bg-opacity-0"
                  >Check it !</span>
                </button>
              </div>
              <div
                v-show="isCorrect"
                id="toast-success"
                class="flex items-center text-gray-500 bg-white rounded-lg dark:text-gray-400 dark:bg-gray-800"
                role="alert"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <i>Correct Answer !</i>
              </div>
              <div
                v-show="isShowAnswer"
                id="toast-success"
                class="flex items-center text-gray-500 bg-white rounded-lg dark:text-gray-400 dark:bg-gray-800"
                role="alert"
              >
                <svg
                  class="w-6 h-6"
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
                <i>Out of attempt !</i>
              </div>
            </div>

            <div v-show="isCheckedAnswer">
              <span
                v-show="!isCorrect"
                class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900"
              >Incorrect ! please try again</span>
              <br />
              <span
                v-show="isShowHint"
                class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900"
              >Answer Incorrect ! [ Hint : answer have {{ todayColor.length }} letters ]</span>
            </div>

            <div
              class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
              role="alert"
              id="correct"
              v-show="isCorrect"
            >
              Congratulations, score today is
              <b>{{ countPoint }} point</b>
              <br />You can guess it every day,see you in
              <span
                class="font-medium italic bg-green-200 text-green-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900"
              >{{ countTime }}</span>
            </div>

            <div
              class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
              id="correct"
              v-show="isShowAnswer"
            >
              Failure, today color answer is
              <span
                class="font-medium italic bg-red-200 text-red-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900"
              >
                <b>{{ todayColor }}</b>
              </span>
              <br />You can guess it every. day see you in
              <span
                class="font-medium italic bg-red-200 text-red-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900"
              >{{ countTime }}</span>
            </div>

            <div>
              Current Point:
              <span
                class="font-medium bg-blue-100 text-blue-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-900"
              >
                <b>{{ totalpoint }}</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
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
</template>
 
<style>
</style>