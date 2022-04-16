<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

defineEmits(['savedColor'])
const props = defineProps({
    savedColorList: {
        type: Array,
        require: true,
    },
});
const notiAleart = () => {
    alert(`save`)
}
</script>

<template>
    <div>
        <button
            class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center mr-2 mb-2"
            @click="$emit('savedColor', savedColorList); notiAleart()">save color</button>
    </div>
</template>
 
<style>
</style>