<script>
import PictureCard from "../components/PictureCard.vue";
import RecenteApi from "../api/recente.js";
const recenteapi = new RecenteApi();
export default {
  components: { PictureCard },
  data() {
    return {
      recentes: [],
    };
  },
  async created() {
    this.recentes = await recenteapi.BuscaTodosOsRecente();
  },
  methods: {
    getPosterUrl(posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    },
  },
};
</script>
<template>
  <h1>Adicionado recentemente</h1>
<div class="Flex">
  <div class="conteudo">
    <PictureCard
        v-for="recente of recentes"
        :key="recente.id"
        :picture_src="getPosterUrl(recente.poster_path)"
        :pic_link="recente"
      />
  </div>
    </div> 
</template>

