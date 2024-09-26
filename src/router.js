import { createMemoryHistory, createRouter  } from 'vue-router'

import Signin from './components/Signin.vue'
import ScreenList from './components/ScreenList.vue'
import ScreenOne from './components/ScreenStepOne.vue'

const routes = [
  { 
    path: '/', 
    name:Signin, 
    component: ScreenOne 
  },
  { 
    path: '/screen_list', 
    name:ScreenList, 
    component: ScreenList 
  },
  { 
    path: '/screen_one', 
    name:ScreenOne, 
    component: ScreenOne 
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router