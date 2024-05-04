<template>
  <h1>slotlar</h1>
  <alt-bilesen>
    <template #form-header>
      <h2>giriş formu</h2>
      <p>giriş yapabilmek için lütfen formu doldurunuz</p>
    </template>
    <template #form-elements>
      <label for="email">email</label>
      <input type="email" name="email" placeholder="enter email" />
      <label for="password">password</label>
      <input type="password" name="password" placeholder="enter password" />
    </template>
    <template #form-controls>
      <button>login</button>
    </template>
  </alt-bilesen>
  <input type="text" placeholder="asdasdsad" />
  <h4 v-bind:class="$style.blue">rengi deniyoruz</h4>
  <h5 v-bind:class="xbileseni.pink">rengi deniyoruz</h5>
</template>

<script>
import AltBilesen1 from "../../24-lesson-slots/src/components/alt-bilesen.vue";
import altBilesen from "./components/alt-bilesen.vue";
export default {
  components: {
    altBilesen,
    AltBilesen1,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
:deep(button) {
  height: 35px;
  border: 1px solid #e2e2e2;
  padding: 0 15px;
}
:global(h3) {
  color: red;
}
</style>
<style module>
.blue {
  color: blue;
}
</style>
<style module="xbileseni">
.pink {
  color: purple;
}
</style>
