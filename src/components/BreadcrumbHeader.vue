<script setup>
    import {Icon} from '@iconify/vue';
    import { views } from '../constants/lists';
    defineProps({
        label: String,
        icon: String,
        showLeftIcon: Boolean,
        showRightIcon: Boolean,
        selected: String,
        index: Number
    })
</script>
<template>
    <div class="flex flex-row items-center">
        <Icon v-if="showLeftIcon" :icon="icon" class="mx-[15px] text-[#9EA1A9]" />
        <h1 :style="{
            color: index === views[selected] ? '#000' : ( index <= views[selected] ? '#638FEE' :'#A1A5AD')
        }" class="font-[inter] text-[13px] font-medium">{{label}}</h1>
        <Icon v-if="showRightIcon" :icon="icon" class="mx-[15px] text-[#9EA1A9]" />
    </div>
</template>

