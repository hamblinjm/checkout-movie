<template>
  <div class="home">
    <h1>Movie Picker</h1>
    <router-link to='/admin' id="adminButton">Admin</router-link>
    <hr/>

    <div class="buttonWrapper">
      <div class="buttonBox">
        <button @click="showLoginForm">Login</button>
      </div>

      <div class="buttonBox">
        <button @click="showSignupForm">Signup</button>
      </div>

  </div>

    <div class="loginForm" v-if="login">
      <form>
        <label>Username:</label>
        <input id="username" type="text">
        <br/>
        <label>Password:</label>
        <input id="password" type="text">
        <br/>
        <button class="submitButton" @click="submitLogin">Submit</button>
      </form>
    </div>

    <!-- <h1>View Selection</h1> -->
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
      genre: '',
      login: false,
      signup: false,
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
    },
    showLoginForm() {
      this.login = true;
      this.signup = false;
    },
    showSignupForm() {
      this.login = false;
      this.signup = true;
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
  margin-bottom: 10px;
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
#adminButton{
  margin-left: 90%;
  font-size: 40px;
  color: rgb(130, 201, 168);
}
#adminButton:hover{
  color: white;
}

.buttonWrapper{
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
  flex-direction: row;
}
.signupForm,
.loginForm {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.buttonBox{
  padding: 15px 32px;
  margin: 10px;
}
button{
  background-color: rgb(130, 201, 168);
  font-family: 'Staatliches', cursive;
  font-size: 25px;
}

input {
  margin: 10px;
}

.loginForm {
  border:rgb(130, 201, 168);
  border-radius: 15px;
  background-color: green;
}
</style>
