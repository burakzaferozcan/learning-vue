const { createApp } = Vue;
createApp({
  // instance
  data() {
    return {
      ilkDegisken: "Vue'ye Hoşgeldiniz",
      ikinciDegisken: "Tekrar Merhaba",
    };
  },
  methods: {},
  // instance
}).mount("#ilk-uygulama");
