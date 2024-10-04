# Project Views
Welcome to the documentation for our project views. Below is a list of key components used in the project.

## 📖 Table of Contents
- [🔍 **BehaviourView**](#behaviourview)
- [📌 **ContentView**](#contentview)
- [🎨 **DesignView**](#designview)
- [🚀 **SuccessView**](#successview)
- [🔘 **TypeView**](#typeview)

## BehaviourView

Here user selects the behavior of the form or the landing page they have created.

## States

### `selected` (*Reactive Object*)

```javascript
const selected = reactive({
    1: {
        id: null,
        value: null
    },
    2: {
        id: null,
        value: null
    },
    3: {
        id: null,
        value: null
    }
})
```

## ContentView

Here user selects the behaviour of the form or the landing page they have created.

## States

### `fetchData` (*Reactive Object*)

It stores the data coming from the temporary backed.

```javascript
const fetchData = reactive({
    loading: null,
    error: null,
    data: null
})
```

### `mountEditor` (*Ref Impl*)

It holds the state for mounting and unmounting the EmailEditor Component.

```javascript
const mountEditor = ref(null); //onActivated it becomes true and onDeactivated it becomes false
```

### `fileName` (*Ref Impl*)

It holds the name of the file created by the user.
```javascript
const fileName = ref("New (25 Feb 2022, 14:20)");
```

## Methods

### `editorLoaded` ( `Object`, *required* )

This function is called when the EmailEditor is loaded, and it is responsible for loading any saved design.

```javascript
const editorLoaded = (data) => {
    const d = JSON.stringify(data.design);
    if (store.userSelectedData.content === null) {
        editorRef.value.editor.loadDesign(JSON.parse(d));
    }
    else {
        editorRef.value.editor.loadDesign(JSON.parse(JSON.stringify(store.userSelectedData.content.design)))
    }
}
```

### `saveDesign`

This function is responsible of saving design data in our store

```javascript
const saveDesign = () => {
    editorRef.value.editor.saveDesign(async (design) => {
        // console.log('saveDesign', design);
        await store.updateData('content', {
            name: fileName.value,
            design: design
        })
        exportHtml();
    });
};
```

## Lifecycle

### `onActivated`

This functions automatically runs when the comnponent is activated, this is responsible for fetching the data and mounting the EmailEditor component.

```javascript
onActivated(() => {
    const { loading, error, data } = useFetch(`http://localhost:3000/templates/${route.params.id}`)
    fetchData.loading = loading
    fetchData.error = error
    fetchData.data = data
    mountEditor.value = true;
})
```

### `onDeactivated`

This function automatically runs when the component is deactivated, this is responsible for unmounting the EmailEditor component.


## DesignView

Here user selects the template they want to edit.

## Methods

### `useFetch`
It fetches all the templates from the temporary backend.

```javascript
const {error, loading, data} = useFetch("http://localhost:3000/templates");

```

## SuccessView

This page is responsible for selecting what happens to the form after completion.

## `States`

### `selected` ( *Reactive Object* )

It holds the user input data 

```javascript
const selected = reactive({
    id: null,
    value: null
})

```
### `Methods`

### `handleContinue`

Responsible for post requests to the temporary backend.

```javascript
const handleContinue = async () => {
    await store.updateData('success', selected);
    const { response } = useApi("http://localhost:3000/userSelectedData", store.userSelectedData);
}
```

## TypeView

Users can select the type of form the want to create from the radio options available.
