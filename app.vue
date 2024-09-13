<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: {
          '@context': 'http://schema.org',
        }
      }
    ]
  })
</script>
