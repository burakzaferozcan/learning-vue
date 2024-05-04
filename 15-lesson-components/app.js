const { createApp } = Vue;
const eleman = {
  template:
    "<p>ben eleman taginin içerisindeyim adım : {{name}}</p> <button v-on:click='changeName()'>isim değiştir</button>",
  data() {
    return {
      name: "burak",
    };
  },
  methods: {
    changeName: function () {
      this.name = "zafer";
    },
  },
};
var one = createApp({
  components: {
    eleman: eleman,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
}).mount("#app-one");
var two = createApp({
  data() {
    return {};
  },
  methods: {},
  computed: {},
});
two.component("eleman2", {
  template:
    "<p>ben eleman2 taginin içerisindeyim adım : {{name}}</p> <button v-on:click='changeName()'>isim değiştir</button>",
  data() {
    return {
      name: "zafer",
    };
  },
  methods: {
    changeName: function () {
      this.name = "burak";
    },
  },
});
two.mount("#app-two");
