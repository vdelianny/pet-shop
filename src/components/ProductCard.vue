<template>
  <div class="border border-gray-300 rounded-xl text-center m-auto w-80 p-4">
    <img :src="imageUrl" :alt="data.title" class="w-full" />
    <h3>{{ data.title }}</h3>
    <p>{{ data.description }}</p>
    <p><strong>Precio: </strong>${{ data.price }}</p>
  </div>
</template>

<script setup>
const imageUrl = "../products/collar.jpg"

import { defineProps } from "vue"

defineProps({
  data: Object
})
</script>
