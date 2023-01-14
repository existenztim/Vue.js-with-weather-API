<script setup>

</script>

<template>
<div class ="cards-container">
  <div class="card">Stockholm</div>
  <div class="card">Göteborg</div>
  <div class="card">Malmö</div>
</div>
</template>

<style scoped> /*Scoped make this rule apply to only this module, scoped lang="scss" if sass is used*/
.cards-container {
  display: flex;
}
.card {
  background-color: black;
  border-radius: 10%;
}
</style>
