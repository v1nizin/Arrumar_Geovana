<script>
import PictureCard from "../components/PictureCard.vue";
import GeneroApi from "../api/genres.js";
const generoapi = new GeneroApi();
export default {
  components: { PictureCard },
  props: ["id"],
  data() {
    return {
      filmes: [],
      generoAtual: {},
    };
  },
  async created() {
    await this.buscarFilmes();
  },
  methods: {
    getPosterUrl(poster_path) {
      return `https://image.tmdb.org/t/p/w500${poster_path}`;
    },
    async buscarFilmes() {
      this.filmes = await generoapi.BuscaFilmesPorGeneroP(this.id);
      this.generoAtual = await generoapi.BuscaGeneroPorId(this.id);
    },
  },
  watch: {
    async id() {
      await this.buscarFilmes();
    },
  },
};
</script>

<template>
  <div class="main">
    <div class="titulo">
      <h1>

        {{ generoAtual.name }}
      </h1>
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
  <CompRodape />
</template>