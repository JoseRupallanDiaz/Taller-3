import { createRouter, createWebHistory } from 'vue-router'
import productosView from '@/views/ProductosView.vue'
import productoInfoView from '@/views/ProductoInfoView.vue'

const routes = [
  {
    path: '/',
    name: 'ProductosView',
    component: productosView
  },
  {
    path: '/productoinfo/:id',
    name: 'ProductoInfo',
    component: productoInfoView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
