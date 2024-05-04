<template>
  <!-- <app-header v-bind:headerTitle="headerTitle"></app-header> -->
  <app-header
    :headerTitle="headerTitle"
    v-on:basligiDegistir="($event) => updateTitle($event)"
  ></app-header>
  <app-article :users="users"></app-article>
  <app-article :users="users"></app-article>
  <app-footer v-bind:headerTitle="headerTitle"></app-footer>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import Article from "./components/article.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-article": Article,
  },
  data() {
    return {
      message: "Hello Vue!",
      headerTitle: "Webtangular",
      users: [
        { name: "burak", spec: "geliştirici", show: false },
        { name: "zafer", spec: "stratejist", show: false },
        { name: "özcan", spec: "bebek", show: false },
        { name: "gülay", spec: "patron", show: false },
        { name: "naim", spec: "geliştirici", show: false },
        { name: "sevval", spec: "ev hanımı", show: false },
      ],
    };
  },
  methods: {
    updateTitle: function (degisenBaslik) {
      this.headerTitle = degisenBaslik;
    },
  },
};
</script>
