<template>
  <div class="home">
    
    <div class="container">
      <div class="row box-product">
            <list-app v-for="product in filterProducts"
                :key="product.id"
                :product="product" 
                class="col-4"></list-app>
        </div>
    </div>

    <div class="container">
      <div class="row box-product">
            <list-product></list-product>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ListProduct from './products/ListProduct.vue';
import ListApp from './products/ListApp.vue';
export default {
  name: 'HomeView',
  
  components: {
    ListApp,
    ListProduct
  },
   
  


  computed: {
        ...mapGetters(['products', 'searchValue']),
        // ...mapActions(['getProductsAPI']),
        // ...mapState(['productsAPI']),
        filterProducts() {
            if (!this.searchValue) {
                return this.products
            } 
            else {
                const filterName = this.products.filter(item =>
                    item.name
                        .toLowerCase()
                        .includes(this.searchValue.toLowerCase())
                )
                if (filterName.length == 0) {
                    return this.products.filter(
                        item => item.price == this.searchValue
                    )
                } else {
                    return filterName
                }
            }
        },
    },
 
  
};
</script>

<style>
.box-product {
    margin: 30px 0px;
}
</style>
