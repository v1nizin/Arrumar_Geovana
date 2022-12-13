import axios from "axios";
export default class FilmeApi {
  async BuscaTodosOsFilmes() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=cb3dbef042c49e1541724a965550514d&language=pt-BR&page=1"
    );
    return response.data.results;
  }
  async BuscarFilmes(id) {
    const response = await axios.get(
      `hhttps://api.themoviedb.org/3/movie/popular?api_key=cb3dbef042c49e1541724a965550514d&language=pt-BR&page=1${id}`
    );
    return response.data.results;
  }
  async BuscaBatman() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/414906?api_key=cb3dbef042c49e1541724a965550514d&language=pt-BR"
    );
    return response.data;
  }
}