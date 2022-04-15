<script setup>
import { ref } from 'vue';
import GameColorComp from '../components/GameColorComp.vue';

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
  <div id="back"
    class="px-8 w-fit w-100  py-6 flex flex-col justify-center relative overflow-hidden sm:rounded sm:py-12"
    :style="{ 'background-color': bgColor }">
    <div class="grid grid-cols-2 inline-block align-middle">
      <div
        class="px-8  dark:bg-slate-800/50 dark:text-white md:w-96 md:h-auto relative px-6 pt-10 pb-8 bg-white/50 sm:max-w-lg sm:rounded sm:mx-auto  sm:px-10">
        <div class="inline-block align-middle max-w-md mx-auto">
          <div class="flex justify-between">
            <div class="h-6 font-medium text-xl" :style="{ 'color': colorWordHead }">🎨 C O L O R S</div>
          </div>
          <br />
          <hr />
          <br>
          <div>
            <!-- <p>Guess {{ colorWord }} !</p> -->
          </div>
          <div class="divide-y divide-gray-300/50">
            <div class="dark:text-white py-8 text-base leading-7 space-y-6 text-gray-600">
              <p>Guess {{ colorWord }} !</p>
              <div class="grid grid-flow-col auto-cols-max">
                <div class="relative z-0 mb-6 w-full group md:w-auto">

                  <input @keyup="isCheckedAnswer = false;" v-model="answer" type="text"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="Input Colors" :style="{ 'color': answer }" required
                    :disabled="isCorrect || isShowAnswer" />
                </div>
                <div v-show="!isCorrect && !isShowAnswer">
                  <button
                    class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    <span @click="checkGuessWord"
                     class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Check
                      it !</span>
                  </button>
                </div>
                <div v-show="isCorrect" id="toast-success"
                  class="flex items-center text-gray-500 rounded-lg dark:text-gray-400 " role="alert">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                  <i>Correct Answer !</i>
                </div>
                <div v-show="isShowAnswer" id="toast-success"
                  class="flex items-center text-gray-500 rounded-lg dark:text-gray-400 dark:bg-gray-800" role="alert">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
                  </svg>
                  <i>Out of attempt !</i>
                </div>
              </div>

              <div v-show="isCheckedAnswer">
                <span v-show="!isCorrect"
                  class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Incorrect
                  ! please try again</span>
                <br />
                <span v-show="isShowHint"
                  class="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Answer
                  Incorrect ! [ Hint : answer have {{ todayColor.length }} letters ]</span>
              </div>

              <div class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                role="alert" id="correct" v-show="isCorrect">
                Congratulations, score today is
                <b>{{ countPoint }} point</b>
                <br />You can guess it every day,see you in
                <span
                  class="font-medium italic bg-green-200 text-green-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">{{
                    countTime
                  }}</span>
              </div>

              <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                role="alert" id="correct" v-show="isShowAnswer">
                Failure, today color answer is
                <span
                  class="font-medium italic bg-red-200 text-red-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                  <b>{{ todayColor }}</b>
                </span>
                <br />You can guess it every. day see you in
                <span
                  class="font-medium italic bg-red-200 text-red-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">{{
                    countTime
                  }}</span>
              </div>

              <div>
                Current Point:
                <span
                  class="font-medium bg-blue-100 text-blue-800 text-s font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-900">
                  <b>{{ totalpoint }}</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="px-8 dark:bg-slate-800/50 dark:text-white md:w-auto md:h-auto relative px-6 pt-10 pb-8 bg-white/50 sm:max-w-lg sm:rounded sm:mx-auto  sm:px-10">
        <div class="text-2xl font-semibold dark:text-white">How To Play!</div>
        <div class="text-xs text-black dark:text-white">
          <p class="text-base leading-relaxed text-black dark:text-white">
            <b>🎨 Description:</b>
            <br />Guess the COLORS ! . If you are correct you got a point if not point will deduct.
            <br />
            <br>
            <b>🎨 How to play:</b>
            <br />1. Each day we will randomly pick up 1 color, the player must guess the color to match the random
            color . Players must type their guessed color in the Input Colors box and then press Check it button.
            <br />2. If the player guesses wrong 3 times, there will be a hint. is the number of characters of that
            color
            <br />3. You will get the scores when guessing correctly.
            <br>
            <b>Notice !</b> You can guess it for 5 times .
          </p>
        </div>
        <GameColorComp :colorHint="colors" />
      </div>
    </div>
  </div>

</template>
 
<style>
</style>