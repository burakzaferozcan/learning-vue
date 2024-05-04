<script setup>
const vRainbow = {
  mounted: (el) => {
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  },
};
</script>
<template>
  <div id="single-blog">
    <!-- global olarak filtre uygulamak main.jste tanımlanır -->
    <h2 v-rainbow>{{ blog.title }}</h2>
    <p>içerik :</p>
    <p>{{ blog.content }}</p>
  </div>
</template>

<script>
import mixins from "../mixins/mixins";
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },

  created() {
    self = this;
    fetch(process.env.SINGLE_FIREBASE_URI + self.id + ".json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        self.blog = json;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mixins: [mixins],
};
</script>
<style scoped>
#single-blog {
  width: 960px;
  margin: 10px auto;
}
</style>
