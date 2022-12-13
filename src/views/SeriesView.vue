<script>
import axios from "axios";
import SeriesCard from "../components/SeriesCard.vue";
import SerieApi from "../api/series.js";
const serieapi = new SerieApi();
export default {
  components: { SeriesCard },
  props: ["id"],
  data() {
    return {
      series: [],
      valor_pesquisa: ""
    };
  },
  async created() {
    this.series = await serieapi.BuscaTodasAsSeries();
  },
  methods: {
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
    async search() {
      const url = ` https://api.themoviedb.org/3/search/tv?api_key=cb3dbef042c49e1541724a965550514d&language=pt-BR&page=1&query=${this.valor_pesquisa}&include_adult=false`;
      const { data } = await axios.get(url);
      this.series = data.results;
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
      <SeriesCard
        v-for="serie of series"
        :key="serie.id"
        :pictur_src="getPosterUrl(serie.poster_path)"
        :pice_link="serie"
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