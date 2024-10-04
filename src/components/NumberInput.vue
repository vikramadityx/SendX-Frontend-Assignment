<script setup>
import { ref, watch } from 'vue';
import { Icon } from '@iconify/vue';
const inputRef = ref(null)

defineProps({
    min: Number,
    max: Number,
    showStep: {
        type: Boolean,
        default: true
    },
    showPrecentage: {
        type: Boolean,
        default: false
    },
    increaseStepIcon: String,
    decreaseStepIcon: String,
    increaseStepContainerClass: {
        type: String,
        default: "",
    },
    decreaseStepContainerClass: {
        type: String,
        default: "",
    },
    stepContainerClass: {
        type: String,
        default: "",
    },
    fun: Function,
    defaultValue: String
})

const handleIncrease = (fun) => {
    const val = Number(inputRef.value.innerText) + 1;
    if (val > 100) return;
    console.log(val)
    fun(val);
    inputRef.value.innerText = val.toString();
}

const handleDecrease = (fun) => {
    const val = Number(inputRef.value.innerText) - 1;
    if (val < 0) return;
    console.log(val);
    fun(val);
    inputRef.value.innerText = val.toString();
}

const handleChange = (e, fun) => {
    const inputValue = e.target.innerText.trim(); // Remove leading and trailing spaces
    const numericValue = parseInt(inputValue);
    if (inputValue === "" || numericValue === 0) {
        return;
    }
    if (isNaN(numericValue) || numericValue < 1) {
        e.target.innerText = "1"; // Update the contenteditable div directly
        e.target.blur(); // Remove focus from the contenteditable div

    } else if (numericValue > 100) {
        e.target.innerText = "100"; // Update the contenteditable div directly
        e.target.blur(); // Remove focus from the contenteditable div
    } else {
        fun(numericValue);
        e.target.innerText = numericValue.toString(); // Update the contenteditable div directly
    }
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(e.target);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);

    e.preventDefault();
}

const handleEnterKey = () => {
    inputRef.value.blur();
}

</script>
<template>
    <div class="w-fit bg-white rounded-md flex flex-row border-solid border-[2px] border-[#E4E6E8]">
        <div class="w-fit flex flex-row px-[10px] py-[3px]">
            <div ref="inputRef" @input="(e) => handleChange(e, fun)" @keydown.enter.prevent="handleEnterKey" :contenteditable="true"
                class="outline-none text-[#9EA3AC] font-[inter] text-[13px]">
                {{ defaultValue }}
            </div>
            <h1 v-if="showPrecentage" class="text-[#9EA3AC] ml-[2px] font-[inter] text-[13px]">%</h1>
        </div>
        <div v-if="showStep" :class="stepContainerClass">
            <div @click="() => handleIncrease(fun)" :class="increaseStepContainerClass">
                <Icon icon="teenyicons:up-solid" class="text-[5px] text-[#656B73]" />
            </div>
            <div @click="() => handleDecrease(fun)" :class="decreaseStepContainerClass">
                <Icon icon="teenyicons:down-solid" class="text-[5px] text-[#656B73]" />
            </div>
        </div>
    </div>
</template>
