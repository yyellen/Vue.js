<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h3>{{ $store.state.message }}</h3>
    <h3>{{ stateMessage }}</h3>
    <h3>{{ fullTitle }}</h3>
    姓名: <input type="text" v-model="name"><br>
    職位: <input type="text" v-model="job"><br>
    <button @click="updateTitle">更新資料</button>
    <h3>{{ $store.getters.title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  data(){
    return{
      name: '',
      job: '',
    }
  },
  methods: {
    updateTitle(){
      this.$store.commie('setTitle', {
        name: this.name,
        job: this.job
      })
    }
  },
  // computed: {
  //   fullTitle(){
  //     return this.$store.getters.fullTitle
  //   }
  // }
}
</script>
