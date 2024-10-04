<script setup>

import { ref, onActivated, onDeactivated, watch, unref, reactive } from 'vue';
import { EmailEditor } from 'vue-email-editor';
import { Icon } from '@iconify/vue';
import { useRouter, useRoute } from 'vue-router';
import { store } from '../store';
import { useFetch } from '../composables/useFetch';

const editorRef = ref(null);
const mountEditor = ref(null);
const fileName = ref("New (25 Feb 2022, 14:20)");
const fetchData = reactive({
    loading: null,
    error: null,
    data: null
})

const route = useRoute();

const router = useRouter();

const editorLoaded = (data) => {
    // console.log(data.name, "data");
    const d = JSON.stringify(data.design);
    // console.log(store.userSelectedData.content.design, "store in content")
    if (store.userSelectedData.content === null) {
        editorRef.value.editor.loadDesign(JSON.parse(d));
    }
    else {
        editorRef.value.editor.loadDesign(JSON.parse(JSON.stringify(store.userSelectedData.content.design)))
    }
}

const saveDesign = () => {
    editorRef.value.editor.saveDesign(async (design) => {
        // console.log('saveDesign', design);
        await store.updateData('content', {
            name: fileName.value,
            design: design
        })
        router.push('/behaviour')
    });
};

// const exportHtml = () => {
//     editorRef.value.editor.exportHtml((data) => {
//         router.push('/behaviour')
//         // console.log('exportHtml', data);
//     });
// };

const handleSaveAndContinue = () => {
    saveDesign();
}

const handleBack = async () => {
    await store.updateData('content', null);
    router.go(-1);
}

onActivated(() => {
    const { loading, error, data } = useFetch(`http://localhost:3000/templates/${route.params.id}`)
    fetchData.loading = loading
    fetchData.error = error
    fetchData.data = data
    mountEditor.value = true;
})

onDeactivated(() => {
    mountEditor.value = false;
})

// watch(store, (newValue, prevValue) => {
//     console.log(newValue, prevValue);
// })


</script>

<script>
export default {
    data() {
        return {
            tools: {
                social: {
                    enabled: true
                }
            }
        }
    }
}
</script>


<template>
    <div>
        <div class="w-full h-[50px] bg-[#4D5562] flex flex-row items-center justify-between px-[20px]">
            <div class="flex flex-row items-center gap-[5px]">
                <Icon icon="mingcute:left-fill" class="text-white" />
                <h1 @click="handleBack" class="font-[inter] text-white cursor-pointer">Back</h1>
            </div>
            <div class="flex flex-row items-center gap-[10px] justify-center">
                <input v-model="fileName" placeholder="New (25 Feb 2022, 14:20)"
                    class="w-[144px] outline-none font-[inter] text-[12px] bg-white/0 underline underline-offset-[3px] text-white">
                <Icon icon="mdi:pencil" class="text-white" />
            </div>
            <div>
                <button @click="handleSaveAndContinue"
                    class="text-white bg-[#55B685] px-[10px] py-[7px] text-[12px] font-[inter] rounded-md">Save &
                    Continue</button>
            </div>
        </div>
        <div v-if="fetchData.loading">
            <h1>Loading...</h1>
        </div>
        <div v-if="fetchData.error">
            <h1>error</h1>
        </div>
        <EmailEditor v-else-if="mountEditor && fetchData.data" :tools="tools" class="editor__height" ref="editorRef"
            @load="() => editorLoaded(fetchData.data)" />
    </div>
</template>

  