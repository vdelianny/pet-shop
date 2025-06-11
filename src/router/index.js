import { createMemoryHistory, createRouter } from 'vue-router'

import ProductList from '@/views/ProductList.vue'
//import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: ProductList },
  //{ path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
