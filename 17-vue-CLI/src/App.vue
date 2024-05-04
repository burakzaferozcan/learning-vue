<template>
  <div>
    {{ title }}
    <button v-on:click="changeTitle">başlığı değiştir</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "ilk vue CLI çalışmam",
    };
  },
  methods: {
    changeTitle() {
      this.title = "değiştirilmiş başlık";
    },
  },
};
</script>
