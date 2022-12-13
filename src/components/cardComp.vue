<script>
export default {
  name: "PictureCard",
  props: {
    picture_src: String,
    pic_desc: String,
    dicas: String,
  },
};
</script>
<template>
  <div class="cards">
    <img :src="picture_src" />
    <h3>{{ dicas }}</h3>
  </div>
</template>
