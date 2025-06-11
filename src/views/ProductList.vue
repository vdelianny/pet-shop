<template>
  <div class="flex gap-10 justify-end">
    <CategoryFilter :categories="categories" v-model="category" />
    <input
      placeholder="Precio mínimo"
      type="number"
      v-model="filters.minPrice"
      class="w-40 outline-none border-b border-gray-300"
    />
    <input
      placeholder="Precio máximo"
      type="number"
      v-model="filters.maxPrice"
      class="w-40 outline-none border-b border-gray-300"
    />
    <input
      placeholder="Nombre del producto"
      v-model="filters.title"
      class="w-40 outline-none border-b border-gray-300"
      @input="filterByTitle"
    />
  </div>
  <h2 class="mt-20 text-start text-xl font-semibold">
    Listado de productos: {{ category }}
  </h2>
  <div class="mt-10 grid grid-cols-3 gap-x-4 gap-y-8">
    <div v-for="product in productsFiltered" :key="product.id">
      <ProductCard :data="product" @add="$emit('add')" />
    </div>
  </div>
  <div v-show="!productsFiltered.length" class="mt-10">
    <p class="text-center text-4xl font-semibold">
      No hay productos disponibles
    </p>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted, defineEmits } from "vue"
import ProductCard from "@/components/ProductCard.vue"
import CategoryFilter from "@/components/CategoryFilter.vue"
import { products } from "@/data.ts"

defineEmits(["add"])

let category = ref("")
let productsFiltered = ref([])
let filters = reactive({
  minPrice: null,
  maxPrice: null,
  title: null
})

//DATA
const categories = ref([
  { text: "Accesorios", value: "Accesorios" },
  { text: "Medicinas", value: "Medicinas" },
  { text: "Alimentos", value: "Alimentos" },
])

//Filter by name
const filterByTitle = (e) => {
  const title = e.target.value.toLowerCase()
  productsFiltered.value = products.filter((el) => el.title.toLowerCase().includes(title))
}

//Watchers and lifecycle
watch(
  () => category.value,
  (newValue) => {
    productsFiltered.value = products.filter((el) => el.category === newValue)

    //restart price filters
    filters.minPrice = null
    filters.maxPrice = null
  }
)
watch(
  filters,
  () => {
    const min = filters.minPrice === "" ? null : filters.minPrice
    const max = filters.maxPrice === "" ? null : filters.maxPrice

    productsFiltered.value = products.filter((el) => {
      //category filter
      const matchesCategory = !category.value || el.category === category.value

      //prices filter
      const matchesMin = min === null || el.price >= min
      const matchesMax = max === null || el.price <= max

      //returning matching elements
      return matchesCategory && matchesMin && matchesMax
    })
  },
  { deep: true }
)

onMounted(() => {
  productsFiltered.value = products
})
</script>
