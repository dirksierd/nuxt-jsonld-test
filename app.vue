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
        key: 'json-ld',
        innerHTML: {
          '@context': 'http://schema.org',
          '@graph': [
            {
              '@context': 'https://schema.org',
              '@type': 'Article',
              author: {
                '@type': 'PoliticalParty',
                name: 'Party 123',
                url: 'https://party.gov',
              },
              headline: 'Headline',
              datePublished: '2024-09-13T10:01:57.065Z',
            }
          ]
        }
      }
    ]
  })
</script>
