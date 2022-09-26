<template>
    <div class="row">
        <div id="content" class="col-sm-12">
            <h3 class="title">Các loại mô hình
                <a href="#">Xem tất cả</a>
            </h3>
            <form class="form-inline my-2 my-lg-0">
                            <input
                                class="form-control mr-sm-2"
                                type="string"
                                placeholder="Search"
                                @input="onChangeMethod($event)"
                            />
                            <button
                                class="btn btn-outline-success my-2 my-sm-0"
                            >
                                Search
                            </button>
            </form>
            
        </div>

    </div>
</template>

<script>
import {mapActions } from 'vuex'
export default {
    name: 'ListCategory',
    methods: {
         ...mapActions(['changesFilterValue']),
        onChangeMethod(event) {
            console.log(event.target.value)
            this.changesFilterValue(event.target.value)
        },
    },
    
}
</script>

<style scoped>
.row {
    padding-top: 30px;
}
#content {
    min-height: 400px;
}
.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    font-weight: normal;
    font-size: 23px;
}
.title a {
    color: #3e7cb4;
    text-decoration: none;
    font-size: 14px;
    background: #eee;
    padding: 8px 10px ;
}

</style>