import { ref, isRef, unref, watchEffect } from "vue";

export function useFetch(url) {
    const data = ref(null);
    const error = ref(null);
    const loading = ref(true);
    const getData = async () => {
        data.value = null;
        error.value = null;
        try {
            const res = await fetch(unref(url));
            const resData = await res.json();
            data.value = resData
        } catch (error) {
            error.value = error
        } finally {
            loading.value = false;
        }
    }

    if (isRef(url)) {
        watchEffect(getData);
    } else {
        getData();
    }


    return { data, error, loading }
}