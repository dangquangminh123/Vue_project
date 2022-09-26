<template>
  <h2>Products</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <ul class="list-group">
            <li v-for="product in products" :key="product.id" class="list-group-item d-flex justify-content-between align-items-center">
              {{product.name}}
              <a href="#"><img :src="require(`@/assets/images/${product.image}.jpg`)" style="width: 50px; height: 50px;" alt="" class="img-responsive"></a>
               <p class="price">{{ product.price }} $</p>
              <span class="badge badge-primary badge-pill">
                <router-link :to="{path:`/products/${product.id}`}" class="btn btn-primary ml-2">Sửa</router-link>
                <a href="" class="btn btn-danger" @click="deleteProduct(product.id)">Xóa</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="product-grid col-lg-2" v-for="product in products" :key="product.id">
                    <div class="thumb">
                        <div class="image">
                            <a href="#"><img :src="require(`@/assets/images/${product.image}.jpg`)" alt="" class="img-responsive"></a>
                        </div>
                        <div class="caption">
                            <h4>
                                <router-link :to="{path:`/chitiet-sanpham/${product.id}`}">
                                    <a href="#" class="product-name">
                                       {{ product.name }}
                                    </a>
                                </router-link>
                            </h4>
                            <p class="price">{{ product.price }} $</p>
                        </div>
                       <div class="description">
                             <p> {{ product.description }} </p>
                       </div>
                    
                        <div class="button-cart">
                            <button class="btn-primary" @click="handleUpdateCart()">Thêm vào giỏ </button>
                        </div>
                    </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {productsColRef} from '../../firebase/index.js';
import { getDocs, doc, deleteDoc } from 'firebase/firestore';
export default {
     name: 'ListProduct',
    data() {
    return {
      products: [],
      selectedDoc: null,
    };
  },
  methods: {
    ...mapActions(['updateCart']),
        handleUpdateCart() {
            const data = {
                action: 'ADD_TO_CART',
                value: this.product,
            }
            this.updateCart(data)
        },

    async fetchProducts() {
      let productsSnapShot = await getDocs(productsColRef);
      let products = [];
      productsSnapShot.forEach( (product) => {
        let productData = product.data();
        productData.id = product.id
        products.push(productData);
      });
      console.log(products);
      this.products = products;
    },

    async deleteProduct(productId) {
      let productRef = doc(productsColRef, productId);
      await deleteDoc(productRef);
      alert('Đã xóa sản phẩm này!');
      this.$router.go();
    },
  },

   computed: {
        // handleIMG() {
        //     console.log('this.product', this.product)
        //     return {
        //         ...this.product,
        //         image: `require('@${this.product.image}')`,
        //     }
        // },
         ...mapGetters(['searchValue', 'cart']),
    },
    created() {
        this.fetchProducts();
     },
}
</script>

<style scoped>
.product-grid {
    height: 300px;
    position: relative;
    text-align: center;
    vertical-align: top;
    padding: 7px;
    margin-top: 20px;
    margin-bottom: 15px;
    border: 4px solid transparent;
}

.product-grid:hover {
    border-color: #eae9e9;
}
.product-grid .product-name:hover {
    color: orangered;
}
.product-grid .price:hover {
    color: yellow;
    background: #ffff;
}
.product-grid .thumb img {
    object-fit: cover;
    height: 150px;
}

.product-grid .thumb img:hover {
    transform: scaleY(90%)
}

.description {
    margin-top: -20px;
}
.product-grid .thumb h4 a {
    font-size: 13px;
    line-height: 18px;
    text-decoration: none;
    padding: 5px;
    color: #333;
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    height: 42px;
    display: -webkit-box;
    -webkit-box-orient: vertical
}

.price {
    color: #3e7cb4;
    font-weight: bold;
}
.btn-primary {
    background-color: #3e7cb4;
    color: #fff;
}
.button-cart {
    position: absolute;
    bottom: 0px;
    margin-top: 25px;
    left: calc(50% - 47px);
}
.button-cart a {
    text-decoration: none;
    padding: 4px 8px;
    font-size: 11px;
    text-transform: uppercase;
    font-family: Arial, Helvetica, sans-serif;
    height: auto;
    font-weight: normal;
    line-height: normal;
}
</style>