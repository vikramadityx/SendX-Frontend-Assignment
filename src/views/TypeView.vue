<script setup>
import { types } from '../constants/lists';
import TypeCard from '../components/TypeCard.vue';
import Button from '../components/Button.vue';
import Footer from '../components/Footer.vue';
import { useRouter } from 'vue-router';
import { store } from '../store';

const router = useRouter();

const handleContinue = () => {
    if(store.userSelectedData.type === null){
        alert('Please Select an Option');
    }
    else{
        router.push('/design')
    }
}

</script>
<template>
    <div class="p-[50px] flex flex-col items-center bg-[#F3F4F6] height">
        <div class="flex flex-col gap-[30px]">
            <div class="w-fit flex flex-col items-start">
                <h1 class="text-[18px] font-[inter] text-black font-semibold">Select from type</h1>
                <h1 class="text-[16px] font-[inter] text-[#A8AAB2] font-normal">What kind of form would you like to create?
                </h1>
            </div>
            <div class="flex flex-row gap-[20px]">
                <TypeCard v-for="(item, i) in types" :src="item.src" :content="item.content" :label="item.label" :id="item.id" :key="i" />
            </div>
            <Footer @handleContinue="handleContinue" :show-back="false" />
        </div>
    </div>
</template> 
