
import { ref } from "vue";
import { defineStore } from "pinia";

import GeneroApi from "@/api/genres"
const generoApi = new GeneroApi()

export const useGenreStore = defineStore("genre", () => {
  
  const genres = ref([]);
  async function getAllGenres() {
    if (genres.value.length === 0) {
      genres.value = await generoApi.BuscaTodosOsGeneros()
    }
  }

  return { genres, getAllGenres };
});