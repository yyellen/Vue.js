<template>
    <h1>ProductID is {{ $route.params.productId }}</h1>

    <router-link :to="`/products/${$route.params.productId}/comments`">Product's comment</router-link>
    {{ info }}
    <router-view></router-view>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => (this.info = response.data))
  }
}
</script>