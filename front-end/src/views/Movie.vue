<template>
<div class="info">
  <h1>{{movie.title}}</h1>
  <div class="content">
    <img :src="movie.path">
    <div class="details">
      <button v-if="user" @click="checkout">Checkout</button>
      <p>MPA Rating: {{movie.mpa}}</p>
      <p>Genre: {{movie.genre}}</p>
      <p>IMDb Rating: {{movie.imdb}} / 10</p>
      <p>Synopsis: {{movie.summary}}</p>
      <br />
      <button class="backButton" @click="goBack">Back</button>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Info',
  data() {
    return {
      movie: {}
    }
  },
  async created() {
    try{
      this.movie = (await axios.get(`/api/movies/${this.$route.params.id}`)).data;
    }catch(error){
        this.error = error.response.data.message;
    }
  },
  computed: {
    user() {
      return this.$root.$data.currentUser;
    }
  },
  methods: {
    async checkout() {
      try {
        await axios.put(`/api/movies/${this.movie._id}/checkout/${this.$root.$data.currentUser._id}`);
        this.$router.push('/checkout');
      } catch(error) {
        console.log(error);
      }
    },
    goBack(){
      this.$router.push('/checkout');
    },
  }
}
</script>

<style scoped>
img {
  height: 400px;
  width: 300px;
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
button{
  background-color: rgb(130, 201, 168);
  font-family: 'Staatliches', cursive;
  font-size: 25px;
}
.backButton{
  margin-top: 15px;
  background-color: white;
  font-size: 20px;
}
</style>
