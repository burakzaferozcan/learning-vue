// hash
// history
import { createRouter, createWebHistory } from "vue-router";
import ShowBlogs from "./components/show-blogs.vue";
import AddBlogs from "./components/add-blog.vue";
import SingleBlog from "./components/single-blog.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: ShowBlogs },
    { path: "/ekle", component: AddBlogs },
    { path: "/blog/:id", component: SingleBlog },
  ],
});
export default router;
