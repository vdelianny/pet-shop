<template>
  <div class="bg-gray-50 min-h-screen px-14 py-7">
    {{ quantity }}
    <ProductList @add="updateShoppingCart" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import ProductList from "@/views/ProductList.vue"

let quantity = ref(0)

const updateShoppingCart = () => {
  quantity.value = JSON.parse(localStorage.getItem("products") || "[]").length
}
onMounted(() => updateShoppingCart())
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
