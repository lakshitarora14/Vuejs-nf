<template>
  <div class="nav">
    <router-link to="/" class="route">
      <img src="../assets/netflix.png" class="nav__logo">
    </router-link>
    <div class="My-Profile">
      <router-link to="/MyProfile" class="route">
        <OpenProfile ></OpenProfile>
      </router-link>
    </div>
  </div>
</template>

<script>
  import OpenProfile from './OpenProfile'

  export default {
    name: "NavbarProfile",
    components:{
      OpenProfile,
    }
  }
</script>

<style lang = "scss" scoped>
  .My-Profile{
    float: right;
    padding: 18px;
  }
  .nav{
    height: 80px;
    &__logo{
      float: left;
      padding-top: 18px;
      padding-left: 42px;
    }
  }
</style>