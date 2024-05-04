<script setup>
const vRainbow = {
  mounted: (el) => {
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  },
};
</script>
<template>
  <div id="show-blogs" v-if="blogs.length > 0">
    //global olarak filtre uygulamak main.jste tanımlanır
    <h1>{{ $filters.buyutFiltre("tüm blog gönderileri") }}</h1>
    <input type="text" placeholder="bloglarda ara..." v-model="keyword" />
    <div class="single-blog" v-for="blog in filteredBlogs">
      <h2 v-rainbow>{{ buyut(blog.title) }}</h2>
      <p>içerik :</p>
      <p>{{ buyutComputed(blog.body) }}</p>
    </div>
    <button v-on:click="blogsIncrementFunction">
      daha fazla gönderi göster
    </button>
  </div>
</template>

<script>
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
    filteredBlogs() {
      return this.blogs.filter((blog) => blog.title.match(this.keyword));
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
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.blogs = json.slice(0, this.blogsIncrement);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  created() {
    this.fetchBlogs();
  },
};
</script>
<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #e2e2e2;
  border-radius: 5px;
}
</style>
