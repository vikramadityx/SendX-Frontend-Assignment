<script setup>
import { ref, reactive, watch , onUpdated} from 'vue';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { store } from '../store';
import NumberInput from '../components/NumberInput.vue'
import FormRadioButton from '../components/FormRadioButton.vue'
import TargetingForm from '../components/TargetingForm.vue';
import Footer from '../components/Footer.vue'
import Button from '../components/Button.vue';

const selected = reactive({
    1: {
        id: null,
        value: {
            1: "50",
            2: "5"
        }
    },
    2: {
        id: null,
        value: '3'
    },
    3: {
        id: null,
        value: '3'
    }
})

const targerting11Value = (val) => {
    selected[1].value[1] = val;
}

const targerting12Value = (val) => {
    selected[1].value[2] = val;
}

const targeting2Value = (val) => {
    selected[2].value = val
}

const targeting3Value = (val) => {
    selected[3].value = val
}

const showAdvanced = ref(false);
const router = useRouter();

const toggleAdvanced = () => {
    showAdvanced.value = !showAdvanced.value;
}

const handleContinue = async () => {
    if(selected[1].id === null){
        alert('select an option')
    }
    else{
        await store.updateData('behaviour', selected);
        router.push("/success");
    }
}

const handleBack = () => {
    router.go(-1);
}

function getTimeAndDate() {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const formattedDate = `${hours}:${minutes}, ${day} ${month}, ${year}`;
  return formattedDate;
}

const dateAndTime = ref(getTimeAndDate());


watch(selected, () => {
    dateAndTime.value = getTimeAndDate();
})

</script>

<template>
    <div class=" pt-[50px] height bg-[#F3F4F6] flex flex-col justify-between items-center">
        <div class="flex pb-[50px] flex-col items-start w-[550px] gap-[20px]">
            <TargetingForm heading="Show the popup when visitor: ">
                <template #children>
                    <div class="flex flex-col gap-[20px]">
                        <FormRadioButton v-model="selected[1].id" value="1" name="1" id="1" before-label="Enters website" />
                        <FormRadioButton v-model="selected[1].id" value="2" name="1" id="2" before-label="Exits website" />
                        <FormRadioButton v-model="selected[1].id" value="3" name="1" id="3" after-label="page scroll"
                            before-label="On">
                            <template #middleElement>
                                <NumberInput :fun="targerting11Value" :default-value="selected[1].value[1]"
                                    step-container-class="flex flex-col justify-center pr-[10px]" :show-step="true"
                                    :show-precentage="true" />
                            </template>
                        </FormRadioButton>
                        <FormRadioButton v-model="selected[1].id" value="4" name="1" id="4" after-label="seconds on website"
                            before-label="After">
                            <template #middleElement>
                                <NumberInput :fun="targerting12Value" :default-value="selected[1].value[2]"
                                    increase-step-container-class="h-[50%] flex justify-center items-center w-[15px] border-solid border-l-[2px] border-b-[1px]"
                                    decrease-step-container-class="h-[50%] flex justify-center items-center w-[15px] border-solid border-l-[2px] border-t-[1px]" />
                            </template>
                        </FormRadioButton>
                    </div>
                </template>
            </TargetingForm>
            <div class="w-full h-[1px] bg-[#d5d7db]  mt-[5px]" />
            <div @click="toggleAdvanced" class="flex flex-row items-center gap-[5px]">
                <h1 class="font-[inter] text-[12px] font-semibold text-[#638FEE]">
                    Advanced
                </h1>
                <Icon class="text-[15px] text-[#638FEE]" icon="mingcute:down-fill" />
            </div>
            <div v-if="showAdvanced" class="flex flex-col gap-[25px]">
                <TargetingForm heading="How often to show the popup" sub-heading="Set the period when you
                want to show the popup to teh same visitor if they didn't subscribe">
                    <template #children>
                        <div class="flex flex-col gap-[20px]">
                            <FormRadioButton v-model="selected[2].id" name="2" id="1" value="1"
                                before-label="Every Page View" />
                            <FormRadioButton v-model="selected[2].id" name="2" id="2" value="2"
                                before-label="Every new browser session" />
                            <FormRadioButton v-model="selected[2].id" name="2" id="3" value="3" after-label="After"
                                before-label="days">
                                <template #middleElement>
                                    <NumberInput :fun="targeting2Value" :default-value="selected[2].value" :show-step="false" />
                                </template>
                            </FormRadioButton>
                        </div>
                    </template>
                </TargetingForm>
                <TargetingForm heading="When to stop showing the popup">
                    <template #children>
                        <div class="flex flex-col gap-[20px]">
                            <FormRadioButton v-model="selected[3].id" name="3" id="1" value="1" before-label="Never" />
                            <FormRadioButton v-model="selected[3].id" name="3" id="2" value="2"
                                before-label="If the visitor has successfully completed the action" />
                            <FormRadioButton v-model="selected[3].id" name="3" value="3" id="3"
                                label-container-css="flex-wrap" after-label="times"
                                before-label="If the visitor has successfully completed the action or the pop-up has been shown">
                                <template #middleElement>
                                    <NumberInput :fun="targeting3Value" :default-value="selected[3].value" :show-step="false" />
                                </template>
                            </FormRadioButton>
                        </div>
                    </template>
                </TargetingForm>
            </div>
            <Footer :show-back="true" @handleBack="handleBack" @handleContinue="handleContinue" />
        </div>
        <div class="w-full py-[10px] px-[20px] bg-white flex justify-end">
            <div class="flex flex-row items-center gap-[20px]">
                <h1 class="font-[inter] text-[#9AA0A9] font-medium text-[14px]">Last updated: {{dateAndTime}}</h1>
                <Button button-class="text-white py-[5px] flex px-[30px] rounded-md bg-[#12B981] text-[15px]"
                    label="Update" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
