<template>
    <div class="product">
        <div class="product-component">
            <ProductBox v-bind="product">
                <input type="number" v-model="number"> &nbsp;&nbsp;
                <button @click="addCart(product)">加入購物車</button>
            </ProductBox>
        </div>
        <hr>
        <h3>商品描述</h3>
        <p>{{ product.desc }}</p>
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
            product: '',
            number: 0,
            severPath: this.$store.state.severPath
        }
    },
    mounted(){
        axios.get(`${this.severPath}/products/${this.$route.params.productId}`)
        .then(resopnse => this.product = resopnse.data)
    },
    methods:{
        addCart: function(product){
            if(product.quantity - this.number < 0){
                alert('存貨不足')
                return
            }
            this.$store.commit('addCart', {
                product: product,
                number: this.number
            })
            alert('加入購物車')
        }
    }
}
</script>

<style scoped>
    .product{
        width: 60%;
        margin: auto;
    }
    .product-component{
        width: 50%;
        max-width: 350px;
        margin: auto;
    }
</style>