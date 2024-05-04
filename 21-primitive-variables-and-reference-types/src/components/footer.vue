<template>
  <footer>
    <p>{{ copyright }} - {{ year }}</p>
    <p>{{ headerTitle }}</p>
  </footer>
</template>

<script>
export default {
  props: {
    headerTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      copyright: "Tüm Hakları Saklıdır",
      year: 2024,
    };
  },
};
</script>
<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
