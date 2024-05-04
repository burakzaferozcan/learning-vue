<template>
  <Header></Header>
  <router-view> </router-view>
</template>

<script>
import AddBLog from "./components/add-blog.vue";
import ListBlogs from "./components/list-blogs.vue";
import ShowBlogs from "./components/show-blogs.vue";
import Header from "./components/header.vue";
import SingleBlog from "./components/single-blog.vue";
export default {
  components: {
    AddBLog,
    ShowBlogs,
    ListBlogs,
    Header,
    SingleBlog,
  },
};
</script>
