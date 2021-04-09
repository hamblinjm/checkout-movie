<template>
  <div class="home">
    <h1>Movie Picker</h1>
    <p>Welcome {{currentUser.firstName}} {{currentUser.lastName}}</p>
    <button id="logout" @click="logout">Logout</button>
    <hr/>

    <!--
      Update models so we can iterate through this user's
      checked out movies
      <MovieList :movies="checkedOut" />
    -->
    <hr/>

    <!--
      return movies with a null user
      <MovieList :movies="available" />
    -->

  </div>
</template>

<script>
//import MovieList from '@/components/Movies.vue'
import axios from 'axios';
export default {
  name: 'Checkout',
  components: {

  },
  data() {
    return {
      currentUser: this.$root.$data.currentUser,
    }
  },
  computed: {
    // movies() {
    //   let checkedOut = this.$root.$data.movies;
    //   // if (this.mpa === '' && this.genre === '') {
    //   //   return this.$root.$data.movies;
    //   // } else if (this.mpa === '') {
    //   //   return this.$root.$data.movies.filter(movie => movie.genre === this.genre);
    //   // }
    //
    //   if (this.mpa !== '') {
    //     filteredMovies = filteredMovies.filter(movie => movie.mpa_rating === this.mpa);
    //   }
    //   if (this.genre !== '') {
    //     filteredMovies = filteredMovies.filter(movie => movie.genre === this.genre);
    //   }
    //   return filteredMovies;
    // }
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
    },
    async submitLogin(){
      try{
        console.log("login");
        let user = await axios.post('/api/users/login', {
            username: this.username,
            password: this.password,
        });
        this.$root.$data.currentUser = user.data;
        this.$router.push({ path: '/checkout'});
      }catch(error){
        console.log(error);
      }
    },
    async submitSignup(){
      try{
        let user = await axios.post('/api/users', {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
          email: this.email,
        });
        this.addUser = user.data;
      }catch(error){
        console.log(error);
      }
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
    margin-bottom: 75px;
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
label{
  font-size: 20px;
}
.submitButton{
  margin-top: 15px;
  background-color: white;
  font-size: 20px;
}
</style>
