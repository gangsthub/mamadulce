<script setup lang="ts">
const props = defineProps<{
  cardTitle: string
  cardDescription: string
}>()
const { cardTitle, cardDescription } = toRefs(props)
</script>

<template>
  <div class="card w-full rounded-md bg-violet-100 flex flex-col content-center">
    <div class="card-content p-4 prose-lg">
      <div class="card-media bg-white mb-4">
        <ModelViewerWrapper class="m-auto"></ModelViewerWrapper>
      </div>
      <div class="card-title mb-3">
        <h2>{{ cardTitle }}</h2>
      </div>
      <div class="card-description">
        <p>{{ cardDescription }}</p>
      </div>
    </div>
  </div>
</template>
