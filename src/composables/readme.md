
# Composables

This folder contains two Vue composition functions, `useApi` and `useFetch`, designed to simplify API interaction and data fetching in Vue applications. These functions handle the complexities of asynchronous requests, loading states, and error handling, allowing developers to focus on building robust and responsive user interfaces.

### Table of Contents

- #### [`useApi`](#useapi)
- #### [`useFetch`](#usefetch)

## useApi

Vue composable function to post data to an API end point. It return `loading` , `error` , `response` values.

## Parameter

### `url` (`String`, *required*)
Pass the API url form which you have to post the data

### `data` (`Object`, *required*)
Body object passed in the form of object.

### Example

```bash

const { loading, error, response } = useApi(apiUrl, postData);

```

## useFetch

Vue composable function to post data to an API end point. It return `loading` , `error` , `data` values.

## Parameter

### `url` (`String`, *required*)
Pass the API url form which you have to get the data

### Example

```bash

const { data, error, loading } = useFetch(apiUrl);

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error</div>
  <!-- <div v-else>
    do something with data
  </div> -->
</template>

```
