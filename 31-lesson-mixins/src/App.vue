<template>
  <AddBLog></AddBLog>
  <ShowBlogs></ShowBlogs>
  <ListBlogs></ListBlogs>
</template>

<script>
import AddBLog from "./components/add-blog.vue";
import ListBlogs from "./components/list-blogs.vue";
import ShowBlogs from "./components/show-blogs.vue";
export default {
  components: {
    AddBLog,
    ShowBlogs,
    ListBlogs,
  },
};
</script>
