const { createApp } = Vue;

var one = createApp({
  data() {
    return {
      output: "",
    };
  },
  methods: {
    readRefs: function () {
      console.log(this.$refs.icerik.value);
      console.log(this.$refs.icerik2.innerText);
      this.output = this.$refs.icerik2.innerText;
    },
  },
  computed: {},
}).mount("#app");
