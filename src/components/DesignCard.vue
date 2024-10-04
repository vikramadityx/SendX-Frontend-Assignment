<script setup>
import { Icon } from '@iconify/vue';

defineProps({
    name: String,
    imgSrc:String,
    id: Number
})

</script>

<template>
    <div class=" cursor-pointer">
        <div :style="{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }"
            class="rounded-md z-10">
            <div class="px-[8px] py-[5px] bg-white rounded-t-md">
                <Icon icon="simple-line-icons:options" class="text-[#C3C5CA] text-[20px]" />
            </div>
            <div class="h-[300px] w-[300px] flex justify-center">
                <img loading="lazy" class="rounded-b-md" :src="imgSrc">
            </div>
        </div>
        <div>
            <h1 class="font-[inter] text-[14px] font-semibold mt-[20px] text-[#1B1C1F]">{{name}}</h1>
        </div>
    </div>
</template>
