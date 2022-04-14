<script setup>
import { ref,computed } from "vue";
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

</script>


<template>
    <div>
        <button @click="$emit('savedColor', savedColorList)">Save Color</button>
    </div>
</template>
 
<style>
</style>