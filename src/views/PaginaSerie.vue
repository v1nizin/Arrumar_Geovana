<script>
import axios from "axios";
import SerieDesc from "../components/SerieDesc.vue";
export default {
  components: { SerieDesc },
  props: ["id"],
  data() {
    return {
      serie: {},
    };
  },
  async created() {
    const url = `https://api.themoviedb.org/3/tv/${this.id}?api_key=cb3dbef042c49e1541724a965550514d&language=pt-BR`;
    const { data } = await axios.get(url);
    this.serie = data;
  },
};
</script>

<template>
  <div class="main">
    {{ id }}
     <SerieDesc :serie="serie" />
  </div>
</template>