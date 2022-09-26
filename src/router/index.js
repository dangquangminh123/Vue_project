import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailProduct from '../components/DetailProduct.vue'
import ChitietSanPham from '../components/ChitietSanpham.vue'
import AddProduct from '../views/products/FormApp.vue'
import EditProduct from '../views/products/EditProduct.vue'
import CartApp from '../components/CartApp'
import { auth } from '@/firebase'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/product',
    name: 'products.list',
    component: () => import( '../views/products/ListApp.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/product/create',
    name: 'product.create',
    component: () => import ('../views/products/FormApp.vue')
  },
  {
    path: '/user',
    name: 'user.list',
    component: () => import ('../views/user/ListApp.vue')
  },
  {
    path: '/user/create',
    name: 'user.create',
    component: () => import ('../views/user/FormApp.vue')
  },
  {
    path: '/cart',
    name: 'CartApp',
    component: CartApp
  },
  {
    path: '/detail-product/:id',
    name: 'DetailProduct',
    component: DetailProduct,
  },
  {
    path: '/chitiet-sanpham/:id',
    name: 'chitietsanpham',
    component: ChitietSanPham,
  },
  {
    path: '/addproduct',
    name: 'addproducts',
    component: AddProduct
  },
  {
    path: '/products/:productId',
    name: 'editproduct',
    component:  EditProduct 

  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoGin.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return; 
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})
export default router
