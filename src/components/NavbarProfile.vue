<template>
  <div class="nav">
    <img src="../assets/netflix.png" class="nav__logo">
  </div>
</template>

<script>
  export default {
    name: "NavbarProfile",
  }
</script>

<style lang = "scss" scoped>
  .nav{
    height: 80px;
    &__logo{
      float: left;
      padding-top: 18px;
      padding-left: 42px;
    }
  }
</style>