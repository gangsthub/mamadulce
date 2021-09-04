<script setup lang="ts">
import { useHead } from './logic/head'
import brand from '~/config/brand'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: brand.DOMAIN },
  ],
})
</script>

<template>
  <router-view />
</template>
