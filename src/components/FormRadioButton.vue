<script setup>

defineProps({
    beforeLabel: {
        type: String,
        default: undefined
    },
    afterLabel: {
        type: String,
        defaul: undefined
    },
    labelContainerCss: {
        type: String,
        default: ""
    },
    name: String,
    id: String,
    value: String,
    modelValue: String,
})

const emit = defineEmits(["update:modelValue"])

const defaultLabelClass = "flex flex-row items-center"

</script>
<template>
    <div class="flex flex-row items-center gap-[10px] h-[15px]">
        <input :value="value" @input="$emit('update:modelValue', $event.target.value)" :name="name" :id="id" type="radio">
        <label :class="[defaultLabelClass, labelContainerCss]">
            <div v-if="beforeLabel">
                <h1 class="text-[12px] font-medium leading-[12px] font-[inter]">{{ beforeLabel }}</h1>
            </div>
            <div class="mx-[10px]">
                <slot name="middleElement">
                </slot>
            </div>
            <div v-if="afterLabel">
                <h1 class="text-[12px] font-medium leading-[12px] font-[inter]">{{ afterLabel }}</h1>
            </div>
        </label>
    </div>
</template>
