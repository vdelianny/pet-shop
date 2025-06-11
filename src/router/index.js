import { createMemoryHistory, createRouter } from 'vue-router'
import ProductList from '@/views/ProductList.vue'

const routes = [
  { path: '/', component: ProductList },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
