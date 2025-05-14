<template>
  <CategoryFilter :categories="categories" v-model="category" />
  <h2 class="my-10 text-start font-semibold">
    Listado de productos: {{ category }}
  </h2>
  <div>
    <ProductCard />
  </div>
</template>

<script setup>
import { ref } from "vue"
import ProductCard from "@/components/ProductCard.vue"
import CategoryFilter from "@/components/CategoryFilter.vue"

const category = ref("")
const categories = ref([
  { text: "Accesorios", value: "Accesorios" },
  { text: "Medicinas", value: "Medicinas" },
  { text: "Alimentos", value: "Alimentos" },
])
</script>
