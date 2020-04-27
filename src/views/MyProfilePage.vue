<template>
  <div>
    <NavbarProfile></NavbarProfile>
    <div class="profiles">
      <h1>Number of active profiles in this account</h1>
      <div class="profiles__number">{{countNoOfProfiles-1}}</div>
    </div>
  </div>
</template>
<script>
  import NavbarProfile from '../components/NavbarProfile'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      NavbarProfile,
    },
    computed: {
      ...mapGetters([
        "countNoOfProfiles"
      ])
    }
  }

</script>
<style scoped lang="scss">
  .profiles{
    color: white;
    font-family: "Helvetica Neue";
    &__number{
      font-size: 200px;
    }
  }
</style>