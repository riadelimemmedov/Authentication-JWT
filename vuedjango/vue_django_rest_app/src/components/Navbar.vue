<template>
    <div class="nav-bar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary nav-1">
        <div class="container mw-0 px-3">
            <a class="navbar-brand" href="#"><!-- ../assets/brand-name.png -->
            <img
                src=""
                width=""
                height="27"
                class="d-inline-block align-top"
                alt=""
                loading="lazy"
            />
            </a>
            <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto text-danger">
                <li class="nav-item" v-if="accessToken != null">
                    <router-link :to="{name:'postslist'}" active-class="text-warning font-weight-bold" exact>Posts</router-link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name:'Navbar',
        computed:mapState(['accessToken'])
    };
</script>

<style scoped>
    a {
    color: #000;
    }
    a:hover{
        color:#2c3e50 !important;
    }
</style>
