<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

defineEmits(['savedColor'])
const props = defineProps({
    savedColorList: {
        type: Array,
        require: true,
    },
});
// const SavetoProfile = (colorExploreId) => {
//     router.push({
//         name: "ProfileColor",
//         query: { colorExploreId: colorExploreId },
//     });
// };
const newSaveColor = computed(() => {
    console.log({ id: props.savedColorList.id, savedPalettes: props.savedColorList.savedPalettes });
    return { id: props.savedColorList.id, savedPalettes: props.savedColorList.savedPalettes }
})

</script>
 
<template>
    <div>
        <button @click="$emit('savedColor', newSaveColor)">Save Color</button>
    </div>
</template>
 
<style>
</style>