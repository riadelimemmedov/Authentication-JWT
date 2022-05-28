import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import store from './store.js'
import IdleVue from 'idle-vue'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

const eventsHub = new Vue()
Vue.use(IdleVue,{
  eventEmitter:eventsHub,
  idleTime:1000
})

router.beforeEach((to,from,next)=>{
  if(to.matched.some(record => record.meta.requiresLogin)){//if login
    console.log('Isledi')
    if(!store.getters.loggedIn){//if false
      next({name:'login_user'})
    }
    else{
      console.log('Icerideki ELSE isledi')
      next()
    }
  }
  else{//if not login
    console.log('Coldeki ELSE isledi')
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
