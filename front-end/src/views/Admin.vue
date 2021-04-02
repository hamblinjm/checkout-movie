<template>
<div class="outer">
  <h1>Admin</h1>

  <div class="buttonWrapper">
    <div class="buttonBox">
      <button @click="editMovie()">Edit a Movie</button>
    </div>

    <div class="buttonBox">
      <button>Delete a Movie</button>
    </div>

    <div class="buttonBox">
      <button>Add a Movie</button>
    </div>
  </div>


  <div class="add">
    <div class="form">
      <label>Title: </label>
      <input v-model="title">
      <p></p>
      <label>MPA Rating: </label>
      <input v-model="mpa">
      <p></p>
      <label>Genre: </label>
      <input v-model="genre">
      <p></p>
      <label>IMDb Rating: </label>
      <input v-model="imdb" placeholder="Number between 1-10">
      <p></p>
      <label>Summary: </label>
      <textarea v-model="summary">Description</textarea>

      <p></p>
      <input type="file" name ="photo" @change="fileChanged">
      <button @click="addMovie">Add</button>

      <!--
      <select v-model="mpa" id="mpa">
        <option v-bind:value="G">G</option>
        <option v-bind:value="PG">PG</option>
        <option v-bind:value="PG-13">PG-13</option>
        <option v-bind:value="R">R</option>
        <option v-bind:value="other">Other</option>
      </select>

      -->
    </div>
  </div>

</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Admin',
  data() {
    return {
      title: "",
      file: null,
      mpa: "",
      genre: "",
      imdb: "",
      summary: "",
    }
  },

  methods:{
    async addMovie(){
      try{
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('api/photos', formData);
        let r2 = await axios.post('/api/movies', {
          title: this.title,
          file: null,
          mpa: "",
          genre: "",
          imdb: "",
          summary: "",
        })
      }
    }
  }

}
</script>

<style scoped>
.buttonWrapper{
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
  flex-direction: row;
}
.buttonBox{
  padding: 15px 32px;
}
button{
  background-color: rgb(130, 201, 168);
  font-family: 'Staatliches', cursive;
  font-size: 25px;
}

img {
  height: 400px;
}

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
