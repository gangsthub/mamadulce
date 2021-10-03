<template>
  <model-viewer
    src="https://ipfs.foundation.app/ipfs/Qme2aPJy9CNMNEKNEMohp94fgWZg7HgVbCZMrYaWch9trm/nft.glb"
    autoplay="true"
    auto-rotate="true"
    camera-controls="true"
    disable-zoom
    ar="true"
    ar-modes="webxr scene-viewer quick-look"
    data-js-focus-visible="true"
    loading="lazy"
    ar-status="not-presenting"
    alt="model preview"
    class="w-full min-h-lg"
  />
</template>

<script lang="ts">
export default {
  async beforeMount() {
    await import('https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js')
  },
}
</script>
