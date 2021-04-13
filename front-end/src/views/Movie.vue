<template>
<div class="info">
  <h1>{{movie.title}}</h1>
  <div class="content">
    <img :src="movie.path">
    <div class="details">
      <p>MPA Rating: {{movie.mpa}}</p>
      <p>Genre: {{movie.genre}}</p>
      <p>IMDb Rating: {{movie.imdb}} / 10</p>
      <p>{{movie.summary}}</p>
      <button v-if="user" @click="checkout">Checkout</button>
      <router-link to="/">Back</router-link>
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
  created() {
      this.movie = this.$root.$data.movie;
      this.$forceUpdate();
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
    }
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
</style>
