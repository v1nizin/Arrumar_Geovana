import axios from "axios";
export default class GeneroApi {
  async BuscaTodosOsGeneros() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=cb3dbef042c49e1541724a965550514d&language=pt-BR"
    );
    return data.genres;
  }
  async BuscaGeneroPorId(id) {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=cb3dbef042c49e1541724a965550514d&language=pt-BR"
    );

    const genero = data.genres.find((g) => g.id == id);

    return genero;
  }
  async BuscaFilmesPorGeneroP(id) {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=cb3dbef042c49e1541724a965550514d&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`
    );
    return data.results;
  }
}