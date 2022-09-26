<template>
  <div>
      <div class="container">
          <div class="row">
              <div class="col-md-6 offset-md-3">
                  <h2>Edit city</h2>
                  <form @submit.prevent="updateProduct">
                        <div class="form-group">
                         
                            <input type="text" class="form-control mb-2" placeholder="City" v-model="productInfo.name"/>
                         
                        </div>
                         <div class="form-group">
                            
                            <input type="text" class="form-control mb-2" placeholder="image"  v-model="productInfo.image"/> 
                           
                        </div>
                         <div class="form-group">
                          
                            <input type="text" class="form-control mb-2" placeholder="description"  v-model="productInfo.description"/>
                        </div>
                         <div class="form-group">
                          
                            <input type="text" class="form-control mb-2" placeholder="price"  v-model="productInfo.price"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Sửa</button>
                 </form>
              </div>
          </div>
      </div>
  </div>
</template>


<script>
import {productsColRef} from "../../firebase/index.js";
import { getDoc, doc, setDoc } from 'firebase/firestore';
export default {
    data() {
        return {
            selectedCity: {},
            productId: null,
            docRef: null,
            productInfo: {
                name: null,
            image: null,
            description: null,
            price: 0,
            }
        };
    },

    methods: {
        async getProduct() {
            let productRef = doc(productsColRef, this.productId);
            this.docRef = productRef;
            let product = await getDoc(this.docRef);
            let productData = product.data();
            this.productInfo.name = productData.name;
            this.productInfo.image = productData.image;
            this.productInfo.description = productData.description;
            this.productInfo.price = productData.price;
        },

        async updateProduct() {
            await setDoc(this.docRef, this.productInfo);
            alert(`Sản Phẩm có ID ${this.productId} đã được cập nhập` );
            this.$router.push("/");
        }
    },

    created() {
        let productId =this.$route.params.productId;
        this.productId = productId;
        this.getProduct();
    },
};
</script>

<style>

</style>