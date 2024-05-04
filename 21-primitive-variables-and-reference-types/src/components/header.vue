<template>
  <header>
    <h1 v-on:click="changeTitle">{{ headerTitle }}</h1>
  </header>
</template>

<script>
export default {
  // props: ["headerTitle"],
  props: {
    headerTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      headerTitle: "header blog",
    };
  },
  methods: {
    changeTitle: function () {
      this.headerTitle = "Hello Vue.js";
    },
  },
};
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
