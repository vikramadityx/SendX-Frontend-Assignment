<script setup>
    import {Icon} from '@iconify/vue'
    defineProps({
        label: String,
        showIcon: Boolean,
        icon: String
    })
</script>
<template>
    <div class="flex flex-row items-center gap-[2px]">
        <p class="text-white font-[inter] text-[12px] font-normal">{{label}}</p>
        <Icon v-if="showIcon" class="text-white" :icon="icon" />
    </div>
</template>


<style lang="scss" scoped></style>