<script setup lang="ts">
const props = defineProps<{
  cardTitle: string
  cardDescription: string
}>()
const { cardTitle, cardDescription } = toRefs(props)
</script>

<template>
  <div class="card w-full rounded-md bg-secondary text-white text-left p-4">
    <div class="card-media bg-white mb-6">
      <ModelViewerWrapper class="m-auto"></ModelViewerWrapper>
    </div>
    <div class="card-title mb-2 text-3xl">
      <h2>{{ cardTitle }}</h2>
    </div>
    <div class="card-description mb-3">
      <p>{{ cardDescription }}</p>
    </div>
  </div>
</template>
