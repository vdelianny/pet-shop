<template>
  <div
    class="bg-white border border-gray-200 shadow-md rounded-xl text-center m-auto w-80 p-4"
  >
    <img :src="imageUrl" :alt="data.title" class="w-full" />
    <h3>{{ data.title }}</h3>
    <p>{{ data.description }}</p>
    <p class="font-bold text-blue-900 mt-4">Precio: ${{ data.price }}</p>
    <div class="mt-4">
      <button
        v-if="data.available"
        class="bg-blue-900 text-white text-sm rounded-full py-2 px-4"
        @click="addProduct(data)"
      >
        Agregar al carrito
      </button>
      <p v-else class="font-bold text-yellow-500">NO DISPONIBLE</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue"

const imageUrl = "../products/collar.jpg"
const emit = defineEmits(["add"])
defineProps({
  data: Object,
})

const addProduct = (product) => {
  let products = JSON.parse(localStorage.getItem("products") || "[]")
  products.push({
    id: product.id,
    price: product.price,
    title: product.title,
  })
  localStorage.setItem("products", JSON.stringify(products))
  emit('add')
}
</script>
