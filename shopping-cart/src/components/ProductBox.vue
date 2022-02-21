<template>
    <div class="product-box">
                <div class="image-box">
                    <img :src="parseImgPath(img_path)">
                </div>
                <h4>{{ brand }} <small>{{ category }}</small></h4>
                <h3>{{ name }}</h3>
                <p>售價: NT${{ price }}</p>
            </div>
</template>

<script>
export default{
    data(){
        return{
            severPath: this.$store.state.severPath
        }
    },
    props:{
        'img_path': String,
        'brand': String,
        'category': String,
        'name': String,
        'price': Number,
    },
    methods:{
        parseImgPath: function(path){
            return this.severPath + path;
        }
    }
}
</script>

<style scoped>
    div.product-box{
        border: 1px solid #888888;
        min-width: 350px;
        width: 24%;
        text-align: center;
        margin: 1px;
        cursor: pointer;
        display: block;
    }
    div.image-box{
        width: 100%;
        height: 250px;
        display: flex;
    }
    img{
        display: block;
        width: 50%;
        margin: auto;
    }
</style>