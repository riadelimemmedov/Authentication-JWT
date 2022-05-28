<template>
    <div class="container text-dark">
        <div class="row justify-align-content-md-center">
            <div class="col-md-6 p-3 login justify-content-md-center mt-5" style="margin:auto">
                <h1 class="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
                <div class="alert alert-danger" role="alert" v-if="incorrectAuth">
                    Incorrect username or password entered - please try again
                </div>
                <form v-on:submit.prevent='loginUserMethod'>
                    <div class="form-group">
                        <input type="text" name="username" id="user" v-model="username" class="form-control" placeholder="Username">
                    </div>
                    <div class="form-group">
                        <input type="password" name="password" id="pass" v-model="password" class="form-control" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-lg btn-primary btn-block">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                username:'',
                password:'',
                incorrectAuth:false
            }
        },
        methods:{
            loginUserMethod(){
                this.$store.dispatch('userLogin',{//asychronous well ajax call with actions and vuex
                    username:this.username,
                    password:this.password
                })
                .then((response)=>{
                    this.$router.push({name:'postslist'})//well returned adter login postlist url
                })
                .catch((err)=>{
                    console.log('Error ', err)
                    this.incorrectAuth=true
                })
            }
        }
    }
</script>

<style scoped>
    body{
        background-color: #f4f4f4;
    }
    .login{
        background-color: #fff;
        margin-top: 10%;
    }
    input{
        padding: 25px 10px;
    }
</style>