<template>
  <div class="home">
    <!-- <img class="home-img" src="/images/main-cropped.jpg"> -->
    <h1>Movie Picker</h1>
    <hr/>
    <div class="filter-wrapper">
      <h2>Filter by:</h2>
      <div class="filter-grid">
        <div class="filter-box">
          <h3>MPA Rating</h3>
          <input type="radio" id="g" value="G" v-model="mpa">
          <label for="g">G</label>
          <br>
          <input type="radio" id="pg" value="PG" v-model="mpa">
          <label for="pg">PG</label>
          <br>
          <input type="radio" id="pg13" value="PG-13" v-model="mpa">
          <label for="pg13">PG-13</label>
          <br>
          <input type="radio" id="other" value="Other" v-model="mpa">
          <label for="other">Other</label>
          <br>
          <span>Selected: {{ mpa }}</span>
        </div>
        <div class="filter-box">
          <h3>Genre</h3>
          <input type="radio" id="drama" value="drama" v-model="genre">
          <label for="one">Drama</label>
          <br>
          <input type="radio" id="comedy" value="comedy" v-model="genre">
          <label for="two">Comedy</label>
          <br>
          <input type="radio" id="horror" value="horror" v-model="genre">
          <label for="two">Horror</label>
          <br>
          <input type="radio" id="thriller" value="thriller" v-model="genre">
          <label for="two">Thriller</label>
          <br>
          <input type="radio" id="scifi" value="scifi" v-model="genre">
          <label for="two">Scifi</label>
          <br>
          <input type="radio" id="fantasy" value="fantasy" v-model="genre">
          <label for="two">Fantasy</label>
          <br>
          <span>Selected: {{ genre }}</span>
        </div>

      </div>
      <button id="clear" v-on:click="clear">Clear Filters</button>

    </div>
    <MovieList :movies="movies" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MovieList from '@/components/Movies.vue'

export default {
  name: 'Home',
  components: {
    MovieList
  },
  data() {
    return {
      mpa: '',
      genre: ''
    }
  },
  computed: {
    movies() {
      let filteredMovies = this.$root.$data.movies;
      // if (this.mpa === '' && this.genre === '') {
      //   return this.$root.$data.movies;
      // } else if (this.mpa === '') {
      //   return this.$root.$data.movies.filter(movie => movie.genre === this.genre);
      // }

      if (this.mpa !== '') {
        filteredMovies = filteredMovies.filter(movie => movie.mpa_rating === this.mpa);
      }
      if (this.genre !== '') {
        filteredMovies = filteredMovies.filter(movie => movie.genre === this.genre);
      }
      return filteredMovies;
    }
  },
  methods: {
    select(mpa, genre) {
      this.mpa = mpa;
      this.genre = genre;
    },
    clear() {
      this.mpa = '';
      this.genre = '';
    }
  }
}
</script>

<style scoped>
.home-img {
  width: 100%;
  height: 400px;
}

.filter-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: top;
  margin-bottom: 30px;
}

.filter-box {
  width: 200px;
}

h3 {
  margin-top: 0;
}

h1 {
  margin: 50px;
  color: rgb(130, 201, 168);
}

hr {
  background-color: rgb(130, 201, 168);
}

#clear {
  margin-bottom: 30px;
}

hr {
  /* width: 50%; */
}

button {
  font-family: 'Staatliches', cursive;
  width: 100px;
}
</style>
