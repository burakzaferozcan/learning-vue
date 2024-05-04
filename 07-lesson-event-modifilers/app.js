const { createApp } = Vue;
createApp({
  data() {
    return {
      age: 23,
      x: 0,
      y: 0,
    };
  },
  methods: {
    arttir: function () {
      return (this.age += 1);
    },

    azalt: function () {
      return (this.age -= 1);
    },
    onArttir: function (yil) {
      return (this.age += yil);
    },

    onAzalt: function (yil) {
      return (this.age -= yil);
    },
    updateXY: function (event) {
      console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    tikla: function () {
      alert("Tıklandı");
    },
  },
}).mount("#app");
