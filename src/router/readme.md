# Router Configuration

This folder contains the configuration for Vue Router, a powerful routing library for Vue.js applications. The router configuration defines various routes, allowing seamless navigation and rendering of different components based on the URL.

## Route Definitions

### Type View
- **Path:** `/type`
- **Name:** Type
- **Component:** TypeView
- **Wildcard Path:** `/type/:pathMatch(.*)*`

### Design View
- **Path:** `/design`
- **Name:** Design
- **Component:** DesignView
- **Wildcard Path:** `/design/:pathMatch(.*)*`

### Content View
- **Path:** `/content/:id`
- **Name:** Content
- **Component:** ContentView

### Behaviour View
- **Path:** `/behaviour`
- **Name:** Behaviour
- **Component:** BehaviourView
- **Wildcard Path:** `/behaviour/:pathMatch(.*)*`

### Success View
- **Path:** `/success`
- **Name:** Success
- **Component:** SuccessView
- **Wildcard Path:** `/success/:pathMatch(.*)*`

### Default Redirect
- **Path:** `/:pathMatch(.*)*`
- **Name:** Type (Fallback)
- **Component:** TypeView

## How to Add New Routes

To add new routes, follow the existing route definitions as examples. Each route object should contain the following properties:

- **Path:** The URL path for the route.
- **Name:** A unique name for the route.
- **Component:** The Vue component to render when the route is accessed.
- **Wildcard Path (Optional):** Use a wildcard path if you want to handle additional nested routes within the main route.

## Documentation and Resources
- [Vue Router](https://router.vuejs.org/)
