import axios from "axios";
export default class LancamentosApi {
  async BuscaTodosOsLancamentos() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=cb3dbef042c49e1541724a965550514d&language=en-US&page=1"
    );
    return response.data.results;
  }
  async BuscarLancamentos(id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=cb3dbef042c49e1541724a965550514d&language=en-US&page=1${id}`
    );
    return response.data.results;
  }
}
