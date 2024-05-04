<template>
  <AddBLog></AddBLog>
  <ShowBlogs></ShowBlogs>
</template>

<script>
import AddBLog from "./components/add-blog.vue";
import ShowBlogs from "./components/show-blogs.vue";
export default {
  components: {
    AddBLog,
    ShowBlogs,
  },
};
</script>
