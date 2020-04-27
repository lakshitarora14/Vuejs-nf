<template>
  <div class="nav">
    <ul class="ul">
      <li class="ul__li">Home</li>
      <li class="ul__li">TV Shows</li>
      <li class="ul__li">Movies</li>
      <li class="ul__li">Latest</li>
      <li class="ul__li">My List</li>
    </ul>
      <router-link to="/" class="route">
        <img src="../assets/netflix.png" class="nav__logo">
      </router-link>
    <div class="hoverWrapper">
      <input class="nav__search" type="text" placeholder="Titles,people,genres"
             v-model="message" @keyup.enter="fetchMovieDetails(message),isTrue=true">
      <div id="search-card">
        <h3>Searching for {{message}}</h3>
        <br>
        <br>
        <MovieDetails :movie-details="movieDetails" v-show="isTrue"></MovieDetails>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MovieDetails from './MovieDetails'

export default {
  name: "NavbarMainPage",
  data(){
    return{
      message:'',
      movieDetails: [],
      isTrue:false
    }
  },
  components:{
    MovieDetails,
  },
  methods: {
    myMethod () {
      // todo
    },
    fetchMovieDetails (movie) {
      let url = buildUrl(movie)
      axios.get(url)
        .then(response => {
          this.updateMovieDetailsInStore(response.data)
        })

    },
    updateMovieDetailsInStore (data){
      this.movieDetails = data
    }
  },
  mounted () {
    this.fetchMovieDetails()

  }
}

const BaseUrl = "http://www.omdbapi.com/?t=";
const ApiKey = "&apikey=dba80b24";

function buildUrl (searchText) {
  return BaseUrl + searchText + ApiKey
}
</script>

<style scoped lang="scss">

.hoverWrapper:hover #search-card {
  display: block;
}

.hoverWrapper #search-card {
  display: none;
  font-family: "Helvetica Neue";
  font-size: 25px;
  color: white;
  /*width: */
  height: 600px;
  margin: 0 auto;
  padding:100px;
}
  .nav {
    height: 80px;
    font-family: "Helvetica Neue";

    &__logo {
      float: left;
      padding-top: 18px;
      padding-left: 42px;
      position: relative;
    }

    &__search {
      color: #808080;
      border: none;
      font-family: "Helvetica Neue";
      font-size: 15px;
      float: right;
      margin-right: 50px;
      margin-top: 18px;
      padding: 8px;
      width: 20px;
      height: 20px;
      background: url("../assets/searchicon.png") no-repeat left;
      text-indent: 40px;
    }

    &__search:hover {
      width: 250px;
      border: 1px solid white;
      height: 20px;
      transition-duration: 1500ms;
      &__logo {
        float: left;
        padding-top: 18px;
        padding-left: 42px;
      }
    }

    .ul {
      list-style: none;
      position: absolute;
      margin-left: 140px;
      margin-top: 20px;
      &__li {
        display: inline;
        font-size: 15px;
        float: right;
        margin: 5px 12px 12px 10px;
        /*padding-top: 0px;*/
        color: white;
        font-family: "Helvetica Neue";
      }
      &__li:hover{
        color: #808080;
        cursor: pointer;
      }
    }
  }

</style>