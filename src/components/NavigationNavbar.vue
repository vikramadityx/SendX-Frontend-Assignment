<script setup>
import Breadcrumb from './Breadcrumb.vue';
import { navigation } from '../constants/lists'
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
<template>
    <div :style="{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px' }"
        class="h-[50px] px-[50px] flex flex-row justify-between items-center">
        <div>
            <h1 class="font-[inter] font-bold text-[15px]">{{route.name}}</h1>
        </div>
        <div>
            <Breadcrumb :selected="route.name" :data="navigation" />
        </div>
    </div>
</template>
