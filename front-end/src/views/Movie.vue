<template>
<div class="info">
  <h1>{{movie.title}}</h1>
  <div class="content">
    <img :src="'/images/' +movie.image">
    <div class="details">
      <p>MPA Rating: {{movie.mpa_rating}}</p>
      <p>Genre: {{movie.genre}}</p>
      <p>IMDb Rating: {{movie.imbd_rating}} / 10</p>
      <p>{{movie.synopsis}}</p>
      <router-link to="/">Back</router-link>
    </div>
  </div>
</div>
</template>

<script>
// import mpaEnums from "../mpa-enums.js"
export default {
  name: 'Info',
  data() {
    return {
      movie: {}
    }
  },
  created() {
    this.movie = this.$root.$data.movies.find(movie => movie.id === parseInt(this.$route.params.id));
  },
  computed: {
    mpa() {
      return this.movie.mpa_rating.toUpper();
    }
  }
}
</script>

<style scoped>
img {
  height: 400px;
}

/* p {
  width: 400px;
  justify-content: center;
} */

.info {
  justify-content: center;
  text-align: center;
  display: float;
}

.details {
  width: 400px;
  justify-content: center;
  text-align: center;
}

.content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  /* margin-bottom: 30px; */
  width: 80%;
  margin: 0 auto;
}

a {
  color: #42b983;
  font-family: 'Roboto Slab', serif;
}
</style>

