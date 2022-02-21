import { createStore } from 'vuex'

export default createStore({
  state: {
    message: 'Hello Cool',
    name: 'John',
    age: 55,
    job: 'student'
  },
  getters: {
    title(state){
      return `${state.name}:${state.job}`
    },
    fullTitle(state, getters){
      return `${getters.title}:${state.age} 歲`
    }
  },
  mutations: {
    setTitle(state, data){
      state.name = data.name
      state.job = data.job
    }
  },
  actions: {
  },
  modules: {
  }
})
