import { ref } from 'vue';
import axios from 'axios';

export function useApi(url, data) {
  const loading = ref(false);
  const error = ref(null);
  const response = ref(null);

  const postData = async () => {
    loading.value = true;
    error.value = null;
    try {
      const res = await axios.post(url, data);
      response.value = await res.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  postData();

  return { loading, error , response};
};