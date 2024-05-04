// hash
// history
import { createRouter, createWebHashHistory } from "vue-router";
import ShowBlogs from "./components/show-blogs.vue";
import AddBlogs from "./components/add-blog.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: ShowBlogs },
    { path: "/ekle", component: AddBlogs },
  ],
});
export default router;
