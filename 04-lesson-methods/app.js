const { createApp } = Vue;
createApp({
  // instance
  data() {
    return {
      sayi: 15,
    };
  },
  methods: {
    selamla: () => {
      return "iyi günler burak";
    },
    // data() altındaki bir değişkene erişmek için normal fonksiyon kullanmalıyız
    // ve this parametresini kullanmalıyız
    dinamikSelamla: function (param) {
      return `iyi günler ${param} ${this.sayi}`;
    },
  },
  // instance
}).mount("#ilk-uygulama");
