<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white">
    <h5 class="my-0 mr-md-auto font-weight-normal">
      <router-link to="/">Trang Chủ</router-link>
    </h5>
    <form class="form-inline my-2 my-lg-0">
      <!-- mr-sm-2 -->
      <!-- my-2 my-sm-0 -->
                            <input
                                class="form-control  p-3 px-md-4 mb-3"
                                type="string"
                                placeholder="Search"
                                @input="onChangeMethod($event)"
                            />
                            <button
                                class="btn btn-outline-success"
                            >
                                Search
                            </button>
    </form>
    <nav class="my-2 my-md-0 mr-md-3">
       <router-link to="/product">Sản Phẩm</router-link>
        <router-link to="/user">User Management</router-link>
        <router-link to="/addproduct">Thêm Sản Phẩm</router-link>
    </nav>
    <a class="btn btn-outline-primary"><router-link to="/cart">
      <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                fill="currentColor"
                                class="bi bi-cart3"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                                />
                            </svg>
      {{ cart.length }}
      </router-link></a>
     <div id="nav">
       <router-link class="btn btn-primary" to="/login">Đăng Nhập</router-link>
    </div>
    <div id="nav" v-if="$store.state.user" >
      <button class="btn btn-danger" @click="$store.dispatch('logout')">Đăng Xuất</button>
    </div>
  </div>

  <div class="wrapper">
    <div class="header">
      <div class="slider">
        <base-slider/>
      </div>
    </div>
  </div>

  <div class="nav-menu">
        <nav-menu />
    </div>
  <div class="container">
    <div class="list-category">
      <!-- <home-view/> -->
    </div>
  </div>

  <div class="colum1">
      <router-view/>
    </div>
    
    <div class="container">
      <div class="slider-brand">
          <slider-brand></slider-brand>
      </div>
    </div>
  
  <base-footer></base-footer>
</template>


<script>
import {mapActions, mapGetters } from 'vuex'
import BaseSlider from './components/BaseSlider.vue'
import SliderBrand from './components/SliderBrand.vue'
import BaseFooter from './components/BaseFooter.vue'
import NavMenu from './components/NavMenu.vue'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
//import HomeView from './views/HomeView.vue'
export default {
    components: {
        BaseSlider,
        SliderBrand,
        BaseFooter,
        NavMenu,
       // HomeView
    },
   
     setup() {
      const store = useStore()
      onBeforeMount(() => {
        store.dispatch('fetchUser')
      })
      return {
        user: store.state.user
      }
    } ,
    methods: {
         ...mapActions(['changesFilterValue']),
        onChangeMethod(event) {
            console.log(event.target.value)
            this.changesFilterValue(event.target.value)
        },
    },
     computed: {
        ...mapGetters(['cart']),
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0px 15px 0px 15px; 
}

nav a.router-link-exact-active {
  color: #42b983;
}

.nav-menu {
  margin-top: 330px;
}
.wrapper {
  max-width: 100%;
  background: #fff;
  font-family: 'Open Sans', sans-serif;
  height: auto;
}
.header {
  width: 100%;
  height: 200px;
}
.header-row {
  max-width: 100%;
  height: 171px;
  position: relative;
  padding: 35px 0px;
}

.container {
  width: 100%;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.slider {
  width: 100%;
  height: 500px;
}

.list-category {
  width: 100%;
  height: auto;
}

.slider-brand {
  width: 100%;
  height: 150px;
}

.colum1{
  margin-top: 200px;
}
</style>
