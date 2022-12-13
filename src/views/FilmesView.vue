<script>
import axios from "axios";
import PictureCard from "../components/PictureCard.vue";
import FilmeApi from "../api/filmes.js";
const filmeapi = new FilmeApi();
export default {
  components: { PictureCard },
  props: ["id"],
  data() {
    return {
      filmes: [],
      valor_pesquisa: "",
    };
  },
  async created() {
    this.filmes = await filmeapi.BuscaTodosOsFilmes();
  },
  methods: {
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
    async search() {
      const url = ` https://api.themoviedb.org/3/search/movie?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR&query=${this.valor_pesquisa}&page=1&include_adult=false`;
      const { data } = await axios.get(url);
      this.filmes = data.results;
    },
  },
};
</script>

<template>
  <div class="main">
    <div class="pesquisa">
      <form @submit.prevent="search" class="busca">
        <input type="text" v-model="valor_pesquisa" />
        <button type="submit">Buscar</button>
      </form>
    </div>
    <div class="conteudo">
      <PictureCard
        v-for="filme of filmes"
        :key="filme.id"
        :picture_src="getPosterUrl(filme.poster_path)"
        :pic_link="filme"
      />
    </div>
  </div>
</template>

<style>
.conteudo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 60px;
}
</style>