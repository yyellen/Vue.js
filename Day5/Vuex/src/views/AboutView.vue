<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{ $store.state.message }}</h3>
    <h3>{{ stateMessage }}</h3>
    <h3>{{ fullTitle }}</h3>
  </div>
</template>

<script>
// import axios from 'axios'

// export default {
//   name: 'App',
//   components: {
//     HelloWorld
//   },
//   computed: {
//     fullTitle(){
//       return this.$store.getters.fullTitle
//     }
//   }
// }
</script>
