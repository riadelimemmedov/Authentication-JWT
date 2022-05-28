import Vue from 'vue'
import VueRouter from 'vue-router'
import PostsList from './views/PostsList.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'


//!Utilize VueRouter
Vue.use(VueRouter)

export default new VueRouter({//bu bur import edende yeni export default new class adi seklinde olanda basqa bir yerde importa yazanda {} yazmaga ehtiyac yoxdue ve ne istesen yaza bilersen deyisken adi kimi
    mode:'history',
    base:process.env.BASE_URL,//started base url default vue-router
    routes:[
        {path:'/',name:'postslist',component:PostsList,meta:{requiresLogin:true}},//yeni ancag giris eden istifadecile bu url e gire bilsin
        {path:'/login',name:'login_user',component:Login},
        {path:'/logout',name:'logout_user',component:Logout}
    ]
})