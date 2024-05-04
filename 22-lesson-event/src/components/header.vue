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
    return {};
  },
  methods: {
    changeTitle: function () {
      this.$emit("basligiDegistir", "tüm componentler için değişen başlık");
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
