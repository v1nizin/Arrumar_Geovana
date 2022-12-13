<script>
import PictureCard from "../components/PictureCard.vue";
import LancamentosApi from "../api/lancamentos.js";
const lancamentosapi = new LancamentosApi();
export default {
  components: { PictureCard },
  data() {
    return {
      lancamentos: [],
    };
  },
  async created() {
    this.lancamentos = await lancamentosapi.BuscaTodosOsLancamentos();
  },
  methods: {
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  },
};
</script>

<template>
  <div class="main">
    <div class="conteudo">
      <PictureCard
        v-for="lancamento of lancamentos"
        :key="lancamento.id"
        :picture_src="getPosterUrl(lancamento.poster_path)"
        :pic_link="lancamento"
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