import { createMemoryHistory, createRouter  } from 'vue-router'

import Signin from './components/Signin.vue'
import ScreenList from './components/ScreenList.vue'
import ScreenOne from './components/ScreenStepOne.vue'
import ScreenTwo from './components/ScreenStepTwo.vue'

const routes = [
  { 
    path: '/', 
    name:Signin, 
    component: ScreenTwo 
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
  { 
    path: '/screen_two', 
    name:ScreenTwo, 
    component: ScreenTwo 
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router