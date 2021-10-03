
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
<template>
  <header class="header px-4 py-5 bg-gray-700 text-white sticky top-0">
    <nav aria-label="main" class="text-left px-3">
      <router-link to="/">
        🏠 {{ t('home') }}
      </router-link>
    </nav>
  </header>
</template>
