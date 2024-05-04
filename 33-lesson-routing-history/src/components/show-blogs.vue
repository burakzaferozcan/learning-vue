<script setup>
const vRainbow = {
  mounted: (el) => {
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  },
};
</script>
<template>
  <div id="show-blogs" v-if="blogs.length > 0">
    <!-- global olarak filtre uygulamak main.jste tanımlanır -->
    <h1>{{ $filters.buyutFiltre("tüm blog gönderileri") }}</h1>
    <input type="text" placeholder="bloglarda ara..." v-model="keyword" />
    <div class="single-blog" v-for="blog in filteredBlogs">
      <router-link v-bind:to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ buyut(blog.title) }}</h2>
      </router-link>
      <p>içerik :</p>
      <p>{{ buyutComputed(blog.content) }}</p>
    </div>

    <button v-on:click="blogsIncrementFunction" v-if="blogs.length > 10">
      daha fazla gönderi göster
    </button>
  </div>
</template>

<script>
import mixins from "../mixins/mixins";
export default {
  data() {
    return {
      blogs: [],
      blogsIncrement: 10,
      keyword: "",
    };
  },
  computed: {
    buyutComputed() {
      return (body) => body.toUpperCase();
    },
  },
  methods: {
    buyut: function (title) {
      return title.toUpperCase();
    },
    blogsIncrementFunction() {
      this.blogsIncrement += 10;
      this.fetchBlogs();
    },
    fetchBlogs() {
      fetch(process.env.FIREBASE_URI, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          var blogsArray = [];
          for (let key in json) {
            json[key].id = key;
            blogsArray.push(json[key]);
          }
          console.log(blogsArray);
          this.blogs = blogsArray;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  created() {
    this.fetchBlogs();
  },
  mixins: [mixins],
};
</script>
<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
  cursor: pointer;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #e2e2e2;
  border-radius: 5px;
}
</style>
