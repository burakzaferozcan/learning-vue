<template>
  <alt-bilesen>
    <template #form-header>
      <h2>giriş formu 2</h2>
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
</template>
<script>
import altBilesen from "./alt-bilesen.vue";
export default {
  components: {
    altBilesen,
  },
  data() {
    return {};
  },
};
</script>
