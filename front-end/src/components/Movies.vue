<template>
    <div class="movies">
        <!-- <div v-for="movie in movies" :key="movie.id">
            <img :src="'images/' +movie.image">
            <h3>{{movie.title}}</h3>
        </div> -->
        <router-link v-for="movie in movies" :key="movie.id" :to="/movie/" style="display: inline-block;text-decoration:none;" @click.native="updateMovie(movie)">
            <!-- <img :src="'images/' +movie.image"> -->
            <img :src="movie.path">
            <h3>{{movie.title}}</h3>
        </router-link>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'MovieList',
    // props: {
    //     movies: Array
    // },
    data() {
        return {
            movies: [],
        }
    },
    created() {
        return this.getMovies();
    },
    methods: {
        async getMovies() {
            try {
                let response = await axios.get("/api/movies");
                this.movies = response.data;
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        updateMovie(newMovie){
          this.$root.$data.movie = newMovie;
        }
    }
}
</script>

<style scoped>
/* .movie {
    width: 300px;
} */

.movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

li a {
    color: white;
    text-decoration: none;
}

h3 {
    color: white;
    text-decoration: none;
    width: 182px;
}

img {
    width: 182px;
    height: 268px;
}

</style>
