<script>
import PictureCard from "../components/PictureCard.vue";
import FilmesComp from "../components/FilmesComp.vue";
import FilmeApi from "../api/filmes.js";
const filmeapi = new FilmeApi();
export default {
  components: { PictureCard,    FilmesComp, },
  data() {
    return {
      filmes: [],
    
    };  
  },  
  async created() {
    this.filmes = await filmeapi.BuscaBatman();
  },  
  methods: {
    getPosterUrl(backdrop_path) {
      return `https://image.tmdb.org/t/p/w500${backdrop_path}`;
    },  
  },  
}  


</script>
<template>
   
      <div class="textin">
        <div class="infos">
          <h2><strong>THE BATMAN</strong></h2>



        <p>
          Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. 
          Com poucos aliados confiáveis,
           o vigilante solitário se estabelece como a personificação da vingança para a população.
        </p>
        
        
      </div>
    </div>
 

  <FilmesComp />
</template>

<style>
.batmanimg {
  height:110vh ;
  width:210vh ;
}
</style>
