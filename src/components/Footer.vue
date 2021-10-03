<script setup lang="ts">
import brand from '~/config/brand'

</script>

<template>
  <nav class="text-sm py-3">
    {{ brand.DOMAIN }} &copy; - {{ new Date().getFullYear() }}
  </nav>
</template>
