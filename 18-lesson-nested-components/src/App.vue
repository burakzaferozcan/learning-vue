<template>
  <h1>bu root componentinin başlığı</h1>
  <app-header />
  <app-footer />
</template>

<script>
import Footer from "./components/footer.vue";
import Header from "./components/header.vue";
export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<!-- scoped kullanılırsa kullanılan komponente özel css verir -->
<style scoped>
h1 {
  color: red;
}
</style>
