<template>
  <div class="profile">
    <router-link to="/home" class="route">
      <ul class="ul">
        <li class="ul__li" v-for="profile in profiles " :key="profile">
          <br>
<!--          <img :src="profile.image" width="125px" height="125px" class="image">-->
          <img src="../assets/profileIcon1.png" width="125px" height="125px" class="image">
          <br>
          <br>
          {{profile.name}}
        </li>
      </ul>
    </router-link>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "Profiles.vue",
    computed: {
      ...mapState([
        'profiles'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .image:hover {
    border: 2px solid white;
  }

  .profile {
    display: table;
    margin: 0 auto;
  }

  .ul {
    list-style: none;

    &__li {
      display: inline;
      float: right;
      margin: 0px 12px 50px 12px;
      padding-top: 0px;
      color: #808080;
      font-family: "Helvetica Neue";
    }

    &__li:hover {
      color: white;
    }
  }

</style>