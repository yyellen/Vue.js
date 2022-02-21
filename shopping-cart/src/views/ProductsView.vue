<template>
    <div class="row">
        <template v-for="product in products" :key="product">
            <ProductBox v-bind="product" /> 
        </template>
    </div>
</template>

<script>
import axios from 'axios'
import ProductBox from '@/components/ProductBox.vue'

export default{
    components:{
        ProductBox
    },
    data(){
        return{
            products:[],
            severPath: this.$store.state.severPath
        }
    },
    mounted(){
        axios.get(`${this.severPath}/products?user_id=1`)
        .then(resopnse => this.products = resopnse.data)
    },
}
</script>

<style scoped>
    div.row{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 80%;
        margin: auto;
    }
</style>