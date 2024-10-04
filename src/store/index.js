import { reactive } from 'vue'

export const store = reactive({
    userSelectedData: {
        'type': null,
        'design': null,
        'content': null,
        'behaviour': null,
        'success': null
    },
    updateData(property, data) {
        this.userSelectedData[property] = data;
    },
    updateTargetingData(targetingId ,data){
        this.userSelectedData.targeting[targetingId] = data;
    }
})