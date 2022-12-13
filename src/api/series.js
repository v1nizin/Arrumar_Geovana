import axios from "axios";
export default class SerieApi {
  async BuscaTodasAsSeries() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=cb3dbef042c49e1541724a965550514d&language=pt-Br&page=1"
    );
    return response.data.results;
  }
  async BuscarSeries(id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=cb3dbef042c49e1541724a965550514d&language=pt-Br&page=1${id}`
    );
    return response.data.results;
  }
}