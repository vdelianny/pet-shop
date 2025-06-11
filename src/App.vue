<template>
  <div class="bg-blue-900 border-b border-yellow-500 p-7">
    <div class="flex justify-end">
      <ShoppingCart color="white" :size="32" />
      <div class="bg-yellow-500 rounded-full relative w-5 h-5">
        <span class="text-sm text-blue-900 absolute bottom-0 left-0 right-0">
          {{ quantity }}
        </span>
      </div>
    </div>
  </div>
  <div class="bg-gray-50 min-h-screen px-14 py-7">
    <ProductList @add="updateShoppingCart" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { ShoppingCart } from "lucide-vue-next"
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
