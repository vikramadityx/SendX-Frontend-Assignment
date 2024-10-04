# Store

## Overview

`store.js` is a JavaScript file that provides a central data store for managing user-selected data in a Vue.js application. It exports a `store` object created using Vue 3's `reactive` function. This store is designed to hold various properties related to user selections, allowing components in your Vue application to interact with and update the stored data.

## Table of Contents

- [Usage](#usage)
  - [Accessing the Store](#accessing-the-store)
  - [Updating User-Selected Data](#updating-user-selected-data)
- [API Reference](#api-reference)
  - [`store.userSelectedData`](#storeuserselecteddata)
  - [`store.updateData(property, data)`](#storeupdatedataproperty-data)
- [Example](#example)

## Usage
### Accessing the Store
You can access the store's data in your Vue components as follows:

```javascript
import { store } from './store.js';

// Accessing user selected data
const userData = store.userSelectedData;
```

### Updating User-Selected Data

#### `store.updateData` ( `property` , *data* )

Updates a specific property in the `userSelectedData` object.

- `property`: The property key to update (e.g., `'type'`, `'design'`, `'content'`, `'targeting'`, `'behaviour'`).
- `data`: The new data to set for the specified property.

## API Reference

### `store.userSelectedData`

An object that holds user-selected data. The properties include:

- `'type'`: User-selected type data.
- `'design'`: User-selected design data.
- `'content'`: User-selected content data.
- `'targeting'`: User-selected targeting data.
- `'behaviour'`: User-selected behavior data.

### `store.updateData(property, data)`

Updates a specific property in the `userSelectedData` object.

- `property` (String): The property key to update.
- `data` (Any): The new data to set for the specified property.

## Example

```javascript
// Accessing and updating user-selected data
import { store } from './store.js';

// Accessing user-selected data
const userData = store.userSelectedData;

// Updating user-selected data
store.updateData('type', 'embeded_form');
```
