<script>
import { mapStores, mapState, mapActions } from "pinia";
import { useGenreStore } from "@/stores/genres";
import ImgsComp from "./ImgsComp.vue";
export default {
  components:{
    ImgsComp},
  data() {
    return {
      genero: "",
    };
  },
  async created() {
    this.generos = await this.getAllGenres();
  },
  computed: {
    ...mapStores(useGenreStore),
    ...mapState(useGenreStore, ["genres"]),
  },
  methods: {
    ...mapActions(useGenreStore, ["getAllGenres"]),
    go() {
      this.$router.push(`/genero/${this.genero}`);
    },
  },
};
</script>
<template>

  <div>
    <label for="Filtros"></label>
    <select v-model="genero" @change="go" class="">
      <option value="" disabled>Categorias</option>
      <option v-for="genero of genres" :key="genero.id" :value="genero.id">
        {{ genero.name }}
      </option>
    </select>
  </div>

  <div>
    <ImgsComp></ImgsComp>
  </div>

</template>
