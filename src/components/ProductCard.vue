<template>
  <div class="card">
    <img :src="imageUrl" :alt="title" class="product-image" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <p><strong>Precio: </strong>${{ price }}</p>
  </div>
</template>

<script setup>
const imageUrl = "../products/collar.jpg"
const title = "Collar rosado"
const description = "Collar rosado ajustable para perros y gatos."
const price = 3.99
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  max-width: 250px;
  text-align: center;
  font-family: sans-serif;
  margin: auto;
}
.product-image {
  width: 100%;
  border-radius: 5px;
}
</style>
