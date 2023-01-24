<template>
  <main>
    <SiteHeader />
    <SiteContent />
  </main>
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue';
import SiteContent from './components/SiteContent.vue';
</script>

<style scoped lang="scss">
  main {
    height: 80vh;
}
</style>
