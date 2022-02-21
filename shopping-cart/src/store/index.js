import { createStore } from 'vuex'

export default createStore({
  state: {
    severPath: 'http://35.234.34.149',
    cart: []
  },
  getters: {
  },
  mutations: {
    addCart(state, data){
      let isNewProduct = true
      console.log(data)
      state.cart.map(function(product){
        console.log(product)
        if(product.id === data.product.id){
          product.number += data.number
          isNewProduct = false
        }
        return product
      })
      console.log(isNewProduct)
      if(isNewProduct){
        let newProduct = data.product
        newProduct.number = data.number
        state.cart.push(newProduct)
      }
      console.log(state.cart)
    }
  },
  actions: {
  },
  modules: {
  }
})
