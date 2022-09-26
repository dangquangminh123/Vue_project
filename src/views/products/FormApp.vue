<template>
  <div>
      <div class="container">
          <div class="row">
              <div class="col-md-6 offset-md-3">
                  <h2>Thêm sản phẩm</h2>
                  <form @submit.prevent="createProduct">
                        <div class="form-group">
                         
                            <input type="text" class="form-control mb-2" placeholder="Product" v-model="name"/>
                         
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control mb-2" placeholder="Image" v-model="image" />
                        </div>

                        <div class="form-group">
                             <textarea  class="form-control mb-2" placeholder="description" v-model="description" cols="30" rows="10"> </textarea>
                        </div>

                         <div class="form-group">
                          
                            <input type="text" class="form-control mb-2" placeholder="price" v-model="price" />
                        </div>
                        <button type="submit" class="btn btn-primary">Thêm</button>
                 </form>
              </div>
          </div>
      </div>
  </div>
</template>


<script>
import {productsColRef} from "../../firebase/index.js";
import { addDoc } from "firebase/firestore";
export default {
    data() {
        return {
            name: null,
            image: null,
            description: null,
            price: 0,
        };
    },
    methods: {
        async createProduct() {
            const addedDoc = await addDoc(productsColRef, this.$data);
            alert("Đã thêm dữ liệu thành công")
            console.log(addedDoc);
            this.$router.push("/");
        },
    },
};
</script>

<style>

</style>