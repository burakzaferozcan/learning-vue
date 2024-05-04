<template>
  <h2>lifecycle hooks {{ title }}</h2>
  <button v-on:click="basligiGUncelle()">başlığı güncelle</button>
</template>

<script>
export default {
  data() {
    return {
      title: "deneme başlığı",
    };
  },
  methods: {
    basligiGUncelle: function () {
      this.title = "başlığı güncelledim";
    },
  },
  beforeCreate() {
    alert("create edilmeden önce");
  },
  created() {
    alert("uygulama create edildi");
  },
  beforeMount() {
    alert("mount edilmeden önceki işlemler");
  },
  mounted() {
    alert("mount edildi");
  },
  beforeUpdate() {
    alert("update edilmeden önceki işlemler");
  },
  updated() {
    alert("iş işten geçti çoktan update edildi");
  },
};
</script>
