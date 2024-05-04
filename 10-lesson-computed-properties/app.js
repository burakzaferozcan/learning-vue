const { createApp } = Vue;
createApp({
  data() {
    return {
      age: 20,
      a: 0,
      b: 0,
    };
  },
  methods: {
    // methodslarda tüm methotlar render edilir
    // yasaAEkle: function () {
    //   console.log("a render edildi");
    //   return this.age + +this.a;
    // },
    // yasaBEkle: function () {
    //   console.log("b render edildi");
    //   return this.age + this.b;
    // },
  },
  computed: {
    // computedlarda sadece kullanılan computed render edilir

    yasaAEkleComputed: function () {
      console.log("a render edildi");

      return this.age + this.a;
    },
    yasaBEkleComputed: function () {
      console.log("b render edildi");

      return this.age + this.b;
    },
  },
}).mount("#app");
