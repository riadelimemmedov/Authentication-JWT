<template>
  <div id="app">
    <!-- !Utilize Vue Router with => router-view tag show url matches components with app.vue -->
    <router-view></router-view>

  </div>
</template>

<script>
  export default{
    name:'App',
  }
</script>

<style>
  body{
    margin:0;
    padding:0;
    background-color: #f8f8f8 !important;
  }
</style>  