import Vue from 'vue'
import Vuex from 'vuex'
import {apiUrlListAxios} from './axios-api.js'

//!Utilize Vuex
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        accessToken:null,
        refreshToken:null,
        APIData:''
    },
    getters:{
        loggedIn(state){
            return state.accessToken != null //yeni accessToken deyeri varsa loggedIn true geri dondersin yoxsa eger yoxdursa yeni state.accessToken == null dursa o zaman false donderecek avtomatim olarag
        }
    },
    mutations:{
        updateStorage(state,{access,refresh}){
            state.accessToken = access
            state.refreshToken = refresh
        },
        destroyToken(state){
            state.accessToken = null
            state.refreshToken = null
        }
    },
    actions:{
        userLogin(context,userCreadentials){//state=context
            return new Promise((resolve,reject)=>{
                apiUrlListAxios.getApi.post('/api/token/',{
                    username:userCreadentials.username,
                    password:userCreadentials.password
                })
                .then((response)=>{
                    context.commit('updateStorage',{access:response.data.access,refresh:response.data.refresh})
                    resolve()//returned promise
                })
            })
        },
        userLogout(context){
            if(context.getters.loggedIn){//if user is logged in
                context.commit('destroyToken')
            }
        }
    }

})

