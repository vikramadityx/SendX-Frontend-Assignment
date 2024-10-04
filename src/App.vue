<script setup>
import Navbar from './components/Navabr.vue'
import NavigationNavbar from './components/NavigationNavbar.vue';
import { RouterView, useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
  <div>
    <Navbar v-if="route.name != 'Content'" />
    <NavigationNavbar v-if="route.name != 'Content'" />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style scoped></style>
