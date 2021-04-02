<template>
    <div class="movies">
        <!-- <div v-for="movie in movies" :key="movie.id">
            <img :src="'images/' +movie.image">
            <h3>{{movie.title}}</h3>
        </div> -->
        <router-link v-for="movie in movies" :key="movie.id" :to="'/movie/' + movie.id" style="display: inline-block;text-decoration:none;">
            <img :src="'images/' +movie.image">
            <h3>{{movie.title}}</h3>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'MovieList',
    props: {
        movies: Array
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

</style>
