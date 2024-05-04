<template>
  <h1>header componentinin başlığı</h1>
  <ul>
    <li v-for="title in titles">{{ title }}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      titles: ["anasayfa", "blog", "hakkımızda", "iletişim"],
    };
  },
  methods: {},
  mounted() {},
};
</script>
