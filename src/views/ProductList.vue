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
  </div>
  <h2 class="mt-20 text-start font-semibold">
    Listado de productos: {{ category }}
  </h2>
  <div class="mt-10 grid grid-cols-3 gap-x-4 gap-y-8">
    <div v-for="product in productsFiltered" :key="product.id">
      <ProductCard :data="product" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from "vue"
import ProductCard from "@/components/ProductCard.vue"
import CategoryFilter from "@/components/CategoryFilter.vue"

let category = ref("")
let productsFiltered = ref([])
let filters = reactive({
  minPrice: null,
  maxPrice: null,
})

//DATA
const categories = ref([
  { text: "Accesorios", value: "Accesorios" },
  { text: "Medicinas", value: "Medicinas" },
  { text: "Alimentos", value: "Alimentos" },
])
const products = [
  {
    id: 1,
    title: "Collar",
    description: "Collar rosado ajustable para perros y gatos.",
    category: "Accesorios",
    price: 15,
  },
  {
    id: 2,
    title: "Vitamina",
    description: "Vitamina para perros y gatos.",
    category: "Medicinas",
    price: 12,
  },
  {
    id: 3,
    title: "Croquetas",
    description: "Alimento para perros.",
    category: "Alimentos",
    price: 50,
  },
  {
    id: 4,
    title: "Cama",
    description: "Cama para perros pequeños.",
    category: "Accesorios",
    price: 230,
  },
]

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
    //filters validation
  },
  { deep: true }
)

onMounted(() => {
  productsFiltered.value = products
})
</script>
