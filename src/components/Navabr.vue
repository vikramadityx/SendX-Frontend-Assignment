<script setup>
import { Icon } from '@iconify/vue'
import NavbarHeaders from './NavbarHeaders.vue';
import { navbar_content } from '../constants/lists';

</script>
<template>
    <div class="h-[50px] flex flex-row bg-[#253985] px-[50px] items-center justify-between">
        <div class="flex flex-row items-center gap-[40px]">
            <div class="w-fit">
                <Icon class="text-[30px] text-white" icon="mdi:send" />
            </div>
            <div class="w-fit flex flex-row gap-[25px]">
                <NavbarHeaders v-for="(item, i) in navbar_content" :label="item.label" :key="i" :icon="item.icon" :showIcon="item.showIcon" />
            </div>
        </div>
        <div class="flex flex-row items-center h-full gap-[15px]">
            <div>
                <Icon class="text-[20px] text-white" icon="ic:round-plus" />
            </div>
            <div class="h-full items-center px-[15px] flex flex-row gap-[15px] border-solid border-white/30 border-x-[1px]">
                <Icon class="text-[18px] text-white" icon="ion:search-sharp" />
                <Icon class="text-[18px] text-white" icon="mi:notification" />
                <Icon class="text-[18px] text-white" icon="ion:apps-sharp" />
            </div>
            <div>
                <div class="w-[25px] h-[25px] bg-slate-200 rounded-full" />
            </div>
        </div>
    </div>
</template>
  
