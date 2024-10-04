<script setup>
defineProps({
    label: String,
    buttonClass: {
        type: String,
        default: "bg-white py-[5px] px-[10px] font-medium rounded-md text-[12px] border-solid border-[2px] ",
    }
})

const defaultClass = "font-[inter] border-[#E4E6E8]"

</script>
<template>
    <button :class="[defaultClass, buttonClass]">
        {{label}}
    </button>
</template>