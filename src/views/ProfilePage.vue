<template>
  <div class = "profilePage">
    <NavbarProfile></NavbarProfile>
    <h1 class="profilePage__heading">{{title}}</h1>
    <Profiles></Profiles>
    <button type="submit" class="manage">MANAGE PROFILES</button>
  </div>
</template>
<script>
  import Profiles from '../components/Profiles'
  import NavbarProfile from '../components/NavbarProfile'
  import {mapState} from "vuex"
  export default {
    components:{
      Profiles,NavbarProfile
    },
    computed:{
      ...mapState([
        'title'
      ])

    }
  }
</script>
<style lang="scss">
  * {
    margin: 0;
    background-color: black;
  }
  .profilePage{
    background-color: black;
    &__heading{
      margin-top: 120px;
      margin-bottom: 8px;
      color: white;
      font-family:"Helvetica Neue";
      font-size:45px;
      font-weight: normal;
      font-stretch: extra-expanded;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
    }
  }
  .manage{
    border: 1px solid #808080;
    height: 35px;
    width: 220px;
    color: #808080;
    font-family: "Helvetica Neue";
    font-size:15px;
    background-color: black;
  }
  .manage:hover{
    border: 1px solid white;
    color: white;
    cursor: pointer;
  }
</style>