<script setup>
import Button from './Button.vue';
defineProps({
    showBack: Boolean,
    label: {
        type: String,
        default: "Continue"
    }
})
</script>
<template>
    <div class="w-full flex flex-col gap-[20px]">
        <div class="w-full h-[1px] bg-[#d5d7db] mt-[5px]" />
        <div class="flex justify-end items-end w-full">
            <div class="flex flex-row items-center gap-[10px]">
                <h1 v-if="showBack" @click="$emit('handleBack')" class="font-[inter] font-medium underline underline-offset-[5px] text-[12px] cursor-pointer">Go back</h1>
                <Button @click="$emit('handleContinue')" :label="label" />
            </div>
        </div>
    </div>
</template>
