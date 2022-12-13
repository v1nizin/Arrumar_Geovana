<script>
export default {
  name: "SeriesCard",
  props: {
    pictur_src: String,
    pice_link: {
      type: Object,
    },
  },
  methods: {
    retornaUrlSeries(id) {
      return `/series/${id}`;
    },
  },
};
</script>

<template>
  <article>
    <div class="films">
      <RouterLink :to="retornaUrlSeries(pice_link.id)">
        <img :src="pictur_src" />
      </RouterLink>
       
    </div>
  </article>
</template>