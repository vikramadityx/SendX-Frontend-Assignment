<script setup>
defineProps({
    heading: String,
    subHeading: {
        type: String,
        default: undefined
    }
})
</script>
<template>
    <div class="w-fit flex flex-col justify-start items-start gap-[20px]">
        <div>
            <h1 v class="font-[inter] font-semibold text-[#1B1D29] ">{{heading}} </h1>
            <h1 v-if="subHeading" class="font-[inter] font-medium text-[#7E838F] text-[13px] mt-[5px]">{{subHeading}}</h1>
        </div>
        <slot name="children"></slot>
    </div>
</template>
