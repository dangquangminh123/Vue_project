<template>
   <div class="container mt-4 mb-4">
        <h1>Chi tiết sản phẩm</h1>
        <div class="card">
            <div class="container-fliud">
                <div class="wrapper row">
                    <div class="preview col-md-6">
                        <div class="preview-pic tab-content">
                            <div class="tab-pane active" id="pic-1">
                                <img :src="variantImage" />
                            </div>
                        </div>
                    </div>
                    <div class="details col-md-6">
                        <h3 class="product-title">
                            <div class="stockInfo">
                                <span class="green" v-if="inventory > 10">Còn Hàng</span>
                                <span class="yellow" v-else-if="inventory <= 10 && inventory > 0">Số lượng còn ít</span>
                                <span class="red" v-else>Hết Hàng</span>
                            </div>
                            {{ name }}
                            <!-- {{ title }} -->
                        </h3>
                        <div class="rating">
                            <div class="stars">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <span class="review-no">41 reviews</span>
                        </div>
                        <p class="product-description">
                            {{ description }}
                        </p>
                        <h4 class="price">
                            Giá Sản Phẩm:
                            <span>VNĐ{{ price }}</span>
                        </h4>
                        <p class="vote">
                            <strong>91%</strong> of buyers enjoyed this product!
                            <strong>(87 votes)</strong>
                        </p>
                        <h5 class="features">
                            đặc tính:
                            <!-- v-for="(feature, index) in features" :key="index" -->
                            <span class="features" data-toggle="tooltip">
                                    <!-- {{feature}} -->
                            </span>
                        </h5>
                        <!-- v-for="(variant, index) in variants" :key="variant.variantId" @mouseover="updateImage(index)"
                        :style="variant.variantColor" -->
                        <!-- {{variant.variantColor}} -->
                        <!-- <h5 class="sizes">
                            Tình Trạng
                            <span 
                            v-for="(size, index) in detailProdct.variants.sizes" :key="size.conditions" @click="selectedSize=index">
                            {{variant.variantColor}}
                            </span>
                        </h5> -->
                         <div class="variants">
                            Chọn phiên Bản
                            <span
                                v-for="(variant, index) in detailProdct.variants" :key="variant.variantImage" @click="selectedVariant=index" class="colorBox" 
                                :style="{ backgroundColor: variant.variantColor }">
                            </span>
                        </div>
                        <!-- <div class="shipping">Shipping {{shipping}}</div> -->
                        <div class="action" v-if="inventory > 0">
                            <!--  :class="{disabledState: inventory <= 0}" -->
                            <!--  @click="handleUpdateCart()" :disabled="inventory <= 0" -->
                            <button
                                class="add-to-cart btn btn-success"
                                type="button"
                                 @click="handleUpdateCart()"
                            >
                                Add to cart
                            </button>
                            <button
                                type="button"
                                class="add-to-cart btn btn-danger"
                            >
                                By now
                            </button>
                            <button class="like btn btn-default" type="button">
                                <span class="fa fa-heart"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <product-review></product-review>
        <products-tabs></products-tabs>
    </div>
</template>

<script>
import ProductReview from './ProductReview.vue';
import ProductsTabs from './ProductTabs.vue';
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { mapGetters, mapActions } from 'vuex'
export default {
     name: 'DetailProduct',
       data() {
    return {
        selectedVariant: 0,
        var:[
            {
                variantColor:'',
                variantImage:'',
            }
        ],
        // selectedSize: 0,
        //         Siz: [
        //             {
        //                 conditions: '',
        //                 price: 0,
        //                 quantity:0,
        //             },
        //          ],
    }
  },
     components: {
         ProductReview,
         ProductsTabs
     },
    //  props: {
    //      member: {
    //          type: Boolean,
    //          required: true,
    //      }
    //  },
     setup() {
        const route = useRoute();
        const id = computed(() => route.params.id)
        return {
            id,
        }
    },
    computed: {
        ...mapGetters(['products']),
        detailProdct() {
            const product = this.products.filter((product) => product.id == this.id);
            return product[0];
        },
        variantImage(){
            return this.detailProdct.variants[this.selectedVariant].variantImage;
        },

        // conditions() {
        //      return this.detailProdct.variants[this.selectedVariant].sizes[this.selectedSize].conditions;
        // },

        inventory(){
            return this.detailProdct.variants[this.selectedVariant].quantity;
        },
        name() {
            return this.detailProdct.variants[this.selectedVariant].name;
        },
        description() {
             return this.detailProdct.variants[this.selectedVariant].description;
        },
        price() {
            if( this.detailProdct.variants[this.selectedVariant].quantity <= 0 ) {
                return 0;
            }
            else {
                   return this.detailProdct.variants[this.selectedVariant].price;
            }
        }
    
    },
    methods: {
        ...mapActions(['updateCart']),
        handleUpdateCart() {
            const data = {
                action: 'ADD_TO_CART',
                value: this.data1(),
            }
            this.updateCart(data)
        },
         data1(){
       this.pro={
        
            id: this.detailProdct.id,
            variants:[
                {
                      name: this.detailProdct.variants[this.selectedVariant].name,
                    color:this.detailProdct.variants[this.selectedVariant].variantColor,
                    image: this.detailProdct.variants[this.selectedVariant].variantImage,
                     description: this.detailProdct.variants[this.selectedVariant].description,
                      price: this.detailProdct.variants[this.selectedVariant].price,
                    quantity:1
                }
            ]
        
       };
      return this.pro; 
    }

    },
}
</script>


<style>
/*****************globals*************/
body {
    font-family: 'open sans';
    overflow-x: hidden;
}

img {
    max-width: 100%;
}
.colorBox {
  width: 60px;
  color: #0effb7;
  height: 45px;
  display: inline-block;
  border: 5px solid #ccc;
  cursor: pointer;
  margin: 3px;
}
.preview {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
@media screen and (max-width: 996px) {
    .preview {
        margin-bottom: 20px;
    }
}

.preview-pic {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.preview-thumbnail.nav-tabs {
    border: none;
    margin-top: 15px;
}
.preview-thumbnail.nav-tabs li {
    width: 18%;
    margin-right: 2.5%;
}
.preview-thumbnail.nav-tabs li img {
    max-width: 100%;
    display: block;
}
.preview-thumbnail.nav-tabs li a {
    padding: 0;
    margin: 0;
}
.preview-thumbnail.nav-tabs li:last-of-type {
    margin-right: 0;
}

.tab-content {
    overflow: hidden;
}
.tab-content img {
    width: 100%;
    -webkit-animation-name: opacity;
    animation-name: opacity;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
}

.card {
    margin-top: 50px;
    background: #eee;
    padding: 3em;
    line-height: 1.5em;
}

@media screen and (min-width: 997px) {
    .wrapper {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }
}

.details {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}

.colors {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}

.product-title,
.price,
.colors {
    text-transform: UPPERCASE;
    font-weight: bold;
}

.checked,
.price span {
    color: #ff9f1a;
}

.product-title,
.rating,
.product-description,
.price,
.vote,
.sizes {
    margin-bottom: 15px;
}

.product-title {
    margin-top: 0;
}

.size {
    margin-right: 10px;
    width: 45px;
  height: 45px;
  display: inline-block;
  border: 5px solid #ccc;
  cursor: pointer;
  margin: 3px;
  background-color: #f70909;
}
.size:first-of-type {
    margin-left: 40px;
}

.color {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    height: 2em;
    width: 2em;
    border-radius: 2px;
}
.color:first-of-type {
    margin-left: 20px;
}

.add-to-cart,
.like {
    background: #ff9f1a;
    padding: 1.2em 1.5em;
    border: none;
    text-transform: UPPERCASE;
    font-weight: bold;
    color: #fff;
    -webkit-transition: background 0.3s ease;
    transition: background 0.3s ease;
}
.add-to-cart:hover,
.like:hover {
    background: #b36800;
    color: #fff;
}
.add-to-cart {
    margin-right: 10px;
}
.not-available {
    text-align: center;
    line-height: 2em;
}
.not-available:before {
    font-family: fontawesome;
    content: '\f00d';
    color: #fff;
}

.green {
    background: green;
    color: orange;
}

.yellow {
    background: yellow;
    color: blue;
}

.red {
    background: #f70909;
    color: yellow
}

.tooltip-inner {
    padding: 1.3em;
}

@-webkit-keyframes opacity {
    0% {
        opacity: 0;
        -webkit-transform: scale(3);
        transform: scale(3);
    }
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@keyframes opacity {
    0% {
        opacity: 0;
        -webkit-transform: scale(3);
        transform: scale(3);
    }
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
</style>