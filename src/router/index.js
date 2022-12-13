import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PaginaFilme from "@/views/PaginaFilme.vue"
import FilmesView from "@/views/FilmesView.vue";
import SeriesView from "@/views/SeriesView.vue";
import CategoriasView from "@/views/CategoriasView.vue";
import LancamentosView from "@/views/LancamentosView.vue";
import PaginaSerie from "@/views/PaginaSerie.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/filmes/:id",
      nome: "filmes",
      component: PaginaFilme,
      props: true,
    },
    {
      path: "/series/:id",
      nome: "series",
      component: PaginaSerie,
      props: true,
    },
    {
      path: "/filmes",
      name: "filmes",
      component: FilmesView,
      props:true
    },
    {
      path: "/series",
      name: "series",
      component: SeriesView,
    },
    {
      path: "/genero/:id",
      name: "generos",
      component: CategoriasView,
      props: true,
    },
    {
      path: "/lancamentos",
      name: "lancamentos",
      component: LancamentosView,
    },
  ],
});

export default router;
