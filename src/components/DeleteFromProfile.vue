<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const props = defineProps({
  idColorUser: {
    type: Number,
    require: true,
  },
});



//delete data
const removeColorSave = async (removeSaveColorId) => {
    const res = await fetch(`http://localhost:5000/savedColors/${removeSaveColorId}`, {
        method: 'DELETE'
    })
    if (res.status === 200) {
        showSaveColors.value = showSaveColors.value.filter((showSaveColor) => showSaveColor.id !== removeSaveColorId)
        console.log('deleted');
    }
    else console.log('error,cannot delete');
}


</script>
 
<template>
    <div>
       
                   

                    <button @click="removeColorSave(idColorUser)"
                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Delete</button>
              
    </div>
</template>
 
<style>
</style>