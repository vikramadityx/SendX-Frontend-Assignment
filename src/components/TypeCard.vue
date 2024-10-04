<script setup>
    import { store } from '../store';

    defineProps({
        src: String,
        label: String,
        content: String,
        id: String
    })

    const handleChange = (e) => {
        // console.log(typeof(e.target.value))
        store.updateData('type', e.target.value);
    }

</script>

<template>
    <div :style="{ 
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        border: store.userSelectedData.type === id ? '2px solid #5184EC' : ''
    }"
        class="w-[190px] h-[250px] flex-col flex items-end px-[8px] py-[10px] rounded-[10px] bg-white">
        <div class="w-fit">
            <input @change="handleChange" :id="id" type="radio" :value="id" name="type"
                class="radio-input mx-[10px] w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </div>
        <label class="flex flex-col items-center" :for="id">
            <img class="w-[100px]" :src="src" alt="embedded">
            <h1 class="text-[13px] font-normal font-[inter] mt-[30px]">{{label}}</h1>
            <p class="text-[13px] font-[inter] text-[#b2b3bb] font-normal text-center mb-[15px]">{{content}}
            </p>
        </label>
    </div>
</template>

<style scoped>
    .radio-input{
        box-shadow: none;
    }
</style>