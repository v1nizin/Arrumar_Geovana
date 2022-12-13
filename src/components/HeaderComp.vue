<script>
import axios from "axios";
import PictureCard from "../components/PictureCard.vue";
export default {
  components: { PictureCard },
  props: ["id"],
  data() {
    return {
      pesquisas: [],
      valor_pesquisa: "",
    };
  },

  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
    async search() {
      const url = ` https://api.themoviedb.org/3/search/movie?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR&query=${this.valor_pesquisa}&page=1&include_adult=false`;
      const { data } = await axios.get(url);
      this.pesquisas = data.results;
    },
  },
};
</script>
<template>
  <header>
    <nav>
      <div class="logo">
        <RouterLink to="/"><h1>CineWeb</h1></RouterLink>
      </div>
      

      
      <div class="links">
        <RouterLink to="/lancamentos"><a href="">Lançamentos</a></RouterLink>
        <RouterLink to="filmes"><a href="#">Filmes</a></RouterLink>
        <RouterLink to="/series"><a href="#">Séries</a></RouterLink>
      </div>
    </nav>
  </header>
</template>
<style>
.pesquisa{
  width: 100px;
  height: 10px;
}
</style>