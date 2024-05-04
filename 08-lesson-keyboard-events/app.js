const { createApp } = Vue;
createApp({
  data() {
    return {};
  },
  methods: {
    isimYakala: function () {
      console.log("isim alanına bi şey yazıldı");
    },

    yasYakala: function () {
      console.log("yas alanına bi şey yazıldı");
    },
  },
}).mount("#app");
