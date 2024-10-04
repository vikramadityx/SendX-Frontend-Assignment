<script setup>
import { useRouter } from 'vue-router';
import Button from '../components/Button.vue';
import NumberInput from '../components/NumberInput.vue';
import TargetingForm from '../components/TargetingForm.vue';
import FormRadioButton from '../components/FormRadioButton.vue';
import Footer from '../components/Footer.vue';
import { reactive, watch } from 'vue';
import { store } from '../store';
import { useApi } from '../composables/useApi';

const router = useRouter();

const handleBack = () => {
    router.go(-1);
}

const selected = reactive({
    id: null,
    value: null
})

const behaviourValue = (val) => {
    selected.value = val;
}

const handleContinue = async () => {
    await store.updateData('success', selected);
    const { response } = useApi("http://localhost:3000/userSelectedData", store.userSelectedData);
}

</script>

<template>
    <div class="p-[50px] height bg-[#F3F4F6] flex justify-center">
        <div class="flex flex-col items-start w-[550px] gap-[20px]">
            <TargetingForm heading="When to stop showing the popup"
                sub-heading="This is the screen visitors see after successfully submitting your form.">
                <template #children>
                    <div class="flex flex-col gap-[20px]">
                        <FormRadioButton value="1" v-model="selected.id" name="4" id="1" before-label="Do Nothing" />
                        <FormRadioButton value="2" v-model="selected.id" name="4" id="2" before-label="Close pop up after"
                            after-label="Seconds">
                            <template #middleElement>
                                <NumberInput :fun="behaviourValue" default-value="5" :show-step="false"
                                    :show-precentage="false" />
                            </template>
                        </FormRadioButton>
                        <FormRadioButton value="3" v-model="selected.id" name="4" id="3" before-label="Redirect to URL" />
                    </div>
                </template>
            </TargetingForm>
            <Footer label="Finish"  @handleContinue="handleContinue" :show-back="true" @handleBack="handleBack" />
        </div>
    </div>
</template>
