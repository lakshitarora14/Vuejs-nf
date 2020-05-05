<template>
  <div class = movie-detail>
    <div class="movie-detail__card-left">
      <img :src="movieDetails.Poster" height="300px" width="225px">
    </div>
    <div class="movie-detail__card-right">
      <div class="movie-detail__title">
        {{ movieDetails.Title}}
      </div>
      <div>
        <table class="movie-detail__horizontal-bar-1">
          <tr>
            <td>{{ movieDetails.Year}}</td>
            <td>{{ movieDetails.Runtime}}</td>
            <td>{{movieDetails.Genre}}</td>
          </tr>
        </table>
      </div>
      <div class="movie-detail__plot">
        {{ movieDetails.Plot}}
      </div>
      <div class="movie-detail__director">
        Director: {{ movieDetails.Director}}<br>
        Stars: {{ movieDetails.Actors}}<br>
        Awards: {{ movieDetails.Awards}}<br>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "MovieDetails",
    props: {
      movieDetails: []
    }
  }
</script>

<style scoped lang="scss">
  .movie-detail{
    font-family: "Helvetica Neue";
    font-size: 20px;
    color: #808080;
    height: 350px;
    width: 900px;
    margin: 0px auto;
    display: block;
      &__card-left{
        float:left;
        width: 270px;
      }
    &__card-right{
      padding: 20px;
    }
    &__title{
      font-size: 60px;
      font-weight: lighter;
      margin-bottom: 10px;
    }
    &__horizontal-bar-1{
      width: 70%;
      float: right;
    }
    &__plot{
      padding: 20px;
      margin-top: 30px;
      margin-left: 40px;
      font-size: 20px;
      text-align: justify;
    }
    &__director{
      text-align: left;
      font-size: 18px;
    }
  }

</style>