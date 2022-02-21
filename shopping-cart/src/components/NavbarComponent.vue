<template>
<div id="nav">
    <router-link to="/products">產品清單</router-link> |
    <router-link to="/checkout">結帳(共有 0 個商品)</router-link>
</div>
</template>

<script>
export default{

}
</script>

<style scoped>
    #nav{
        padding:30px;
        text-align: center;
        background: beige;
    }
    #nav a{
        font-weight: bold;
        color: #2c3e50;
    }
    #nav a.router-link-exact-active{
        color: #42b983;
    }
</style>