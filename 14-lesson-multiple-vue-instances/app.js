const { createApp } = Vue;
var one = createApp({
  data() {
    return {
      title: "1. instance başlığı",
    };
  },
  methods: {},
  computed: {
    greet: function () {
      return "app 1 başlığı";
    },
  },
}).mount("#app-one");
var two = createApp({
  data() {
    return {
      title: "2. instance başlığı",
    };
  },
  methods: {
    changeTitle: function () {
      one.title = "2.instance başlığı değişti";
    },
  },
  computed: {
    greet: function () {
      return "app 1 başlığı";
    },
  },
}).mount("#app-two");
