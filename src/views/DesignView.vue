<script setup>
import DesignCard from '../components/DesignCard.vue';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import {useFetch} from '../composables/useFetch'
import { store } from '../store';
import { watch } from 'vue';

const router = useRouter();

const handleCardClick = async (id) => {
    await store.updateData('design', id)
    router.push(`/content/${id}`);
}

// watch(() => store.userSelectedData.design, (n, p) => {
//     console.log(n, p);
// })

const {error, loading, data} = useFetch("http://localhost:3000/templates");

// console.log(data, "design")

</script>
<template>
    <div class="height bg-[#F3F4F6] pt-[30px] px-[50px] ">
        <div class="flex justify-end">
            <div :style="{boxShadow: 'rgba(50, 50, 93, 0.1) 0px 2px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 3px -1px'}" 
            class="bg-white rounded-md px-[10px] w-fit flex flex-row gap-[10px] py-[5px] items-center border-solid border-[1px] border-[#E4E6E8]">
                <Icon icon="ion:search-sharp" class="text-[#9CA1AD]" />
                <input placeholder="Search templates..." class="outline-none font-[inter] text-[12px] bg-white/0 text-black">
            </div>
        </div>
        <div v-if="loading">
            <h1>Loading...</h1>
        </div>
        <div v-else-if="error">
            <h1>Error...</h1>
        </div>
        <div v-else class="flex flex-row flex-wrap gap-[30px] mt-[30px]">
            <DesignCard @click="() => handleCardClick(item.id)" v-for="(item, i) in data" :name = "item.name" :imgSrc="item.img" :id="item.id" :key="i" />
        </div>
    </div>
</template>

