import { createRouter, createWebHistory } from 'vue-router'
import UserView from '../views/UserView.vue'
import TodoView from '../views/TodoView.vue'

const routes = [
  {
    path: '/users/:userId',
    name: 'user',
    component: UserView,
    children:[
      {
        path: 'todos',
        component: TodoView,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
