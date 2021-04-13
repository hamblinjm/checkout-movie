<template>
  <div class="home">
    <h1>Movie Picker</h1>
    <p>Welcome {{currentUser.firstName}} {{currentUser.lastName}}</p>
    <button id="logout" @click="logout">Logout</button>
    <hr/>

    <h2>Your Movies</h2>
    <MovieList :movies="checkedOut" />

    <hr/>
    <h2>Available Movies</h2>
    <MovieList :movies="available" />


  </div>
</template>

<script>
import MovieList from '@/components/Movies.vue'
import axios from 'axios';
export default {
  name: 'Checkout',
  components: {
    MovieList
  },
  data() {
    return {
      currentUser: this.$root.$data.currentUser,
    }
  },
  computed: {
    available(){
      let availableMovies = this.getAvailable();
      return availableMovies;
    },
    checkedOut(){
      let checkedMovies = this.getCheckedOut();
      return checkedMovies;
    }

  },
  methods: {
    async getAvailable(){
      let response = await axios.get("/api/movies/available");
      return response.data;
    },
    async getCheckedOut(){
      let response = await axios.get("/api/movies/checked-out/" + this.currentUser._id);
      return response.data;
    },
    logout(){
      try{
          this.$root.$data.currentUser = null;
          this.$router.push({ path: '/'});
      }catch(error){
        console.log(error);
      }
    },
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
