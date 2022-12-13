<script>
import axios from "axios";
import FilmeDesc from "../components/FilmeDesc.vue";
export default {
  components: { FilmeDesc },
  props: ["id"],
  data() {
    return {
      filme: {},
    };
  },
  async created() {
    const url = `https://api.themoviedb.org/3/movie/${this.id}?api_key=a37701b7a0845f3785cd83eb23add599&language=pt-BR`;
    const { data } = await axios.get(url);
    this.filme = data;
  },
};
</script>

<template>
  <div class="main">
    {{ id }}
    <FilmeDesc :filme="filme" />
  </div>
</template>