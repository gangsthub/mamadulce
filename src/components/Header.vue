
<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <div class="header">
    <div class="logo"></div>
    <div class="contact">
      <router-link to="/contact">
        {{ t('contact') }}
      </router-link>
    </div>
  </div>
</template>
