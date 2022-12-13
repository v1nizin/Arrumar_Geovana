<script>
import FilmeApi from "../api/filmes.js";
const filmeapi = new FilmeApi();
export default {
  data() {
    return {
      videos: false,
    };
  },
  props: ["filme"],
  
  methods: {
    
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  
   
},
}
</script>
<template>
  <div class="descMovi"></div>
    <div>
      <div class="titulo2">{{ filme.title }}</div>
      <img
        class="poster-filme-pag"
        :src="getPosterUrl(filme.poster_path)"
        />
        <div class="descMovi9">
          <h1>Sinopse:</h1>
        {{ filme.overview }}
      </div>
    </div>
  
      <div class="descMovi8">
        <h3>Lançamento: {{ filme.release_date }}</h3>

      </div>
      <div class="descMovi7">
        <h3>Avaliação dos usuários: {{ Math.round(filme.vote_average) }}</h3>
      </div>
     
      
      
</template>

<style>
.descMovi9 {
  color: white;
  display: flex;
  padding: 2vh;
  padding-left: 30vh ;
  margin-top: -30vh;
  float: right ;
  margin-right: 98vh;


}
.descMovi8 {
  color: white;
  display: flex;
  padding: 2vh;
  padding-right: 20vh;
  font-size: 2vh;
  margin-top: -15vh;
  float: right;
  margin-right: 136vh;
}
.descMovi7 {
  color: white;
  display: flex;
  padding: vh;
  padding-right: 20vh;
  font-size: 2vh;
  margin-top:-9vh;
  float: right;
  margin-right: 136vh;
  }

.titulo2 {
    font-size: 3vh;
    margin-top: 8vh;
    color: white;
    float: right;
    margin-right: 110vh;
}


</style>