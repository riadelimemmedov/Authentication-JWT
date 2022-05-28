<template>
    <div class="posts">
    <Navbar></Navbar>
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                    <div v-for="posts in APIData" :key="posts.id" class="col-md-4">
                        <div class="card mb-4 box-shadow">
                            <img class="card-img-top" src="https://via.placeholder.com/150x100" alt="Card image cap">
                            <div class="card-body">
                                <h4 class=""><a class="text-secondary" href="">{{posts.title}}</a></h4>
                                <p class="card-text">{{posts.content}}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <a href="" class="btn btn-sm btn-outline-primary" role="button" aria-pressed="true">View</a>
                                        <a href="" class="btn btn-sm btn-outline-secondary" role="button" aria-pressed="true">Edit</a>
                                    </div>
                                    <small class="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {apiUrlListAxios} from '../axios-api'//paketden import edende {} icinde import et cunki
    import Navbar from '../components/Navbar.vue'
    import { mapState } from 'vuex'

    export default{
        //!Not Token Accees

        // name:'Posts',
        // data(){//data must return dict object value
        //     return{
        //         APIData:[]
        //     }
        // },
        // components:{
        //     Navbar
        // },
        // created(){//each page reload get data from backend django database
        //     apiUrlListAxios.getApi.get('/posts/')
        //         .then((response)=>{
        //             console.log('Successfully Return Posts List')
        //             this.APIData = response.data
        //         })
        //         .catch((err)=>{
        //             console.log('Error Send Request')
        //         })
        // },

        //!Token Access With Authentication
        components:{
            Navbar
        },
        onIdle(){
            this.$store.dispatch('userLogout')
                .then((response)=>{
                    this.$router.push({name:'login_user'})
                })
        },
        computed:mapState(['APIData']),//burdaki deyiskeni Html icindede rahat bir sekilde data icinde yazdigin kimi istifade ede bilersen
        created(){
            apiUrlListAxios.getApi.get('/posts/',{headers:{Authorization:`Bearer ${this.$store.state.accessToken}`}})//get posts list
                .then((response)=>{
                    this.$store.state.APIData = response.data
                })
                .catch((err)=>{
                    console.log('Error Get Post List ', err)
                })
        }
    }
</script>

<style scoped>

</style>