<template>
    <div class="log">
    </div>
</template>

<script>
    export default{
        created(){
            this.$store.dispatch('userLogout')
                .then((response)=>{
                    this.$router.push({name:'login_user'})//after logged out redirect to logged in url
                })
        }
    }
</script>

<style>

</style>