<template>
                <div class="product-grid col-lg-2">
                    <div class="thumb">
                        <div class="image">
                            <a href="#"><img :src="product.image" alt="" class="img-responsive"></a>
                        </div>
                        <div class="caption">
                            <h4>
                                <router-link :to="`/detail-product/${product.id}`">
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
export default {
    name: 'ListApp',
    props: ['product'],
    data() {
      return {
        member: true,
      }
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