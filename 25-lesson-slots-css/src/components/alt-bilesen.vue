<template>
  <h3>alt bileşenin başlığı</h3>
  <form action="">
    <div class="container">
      <div class="container-inner">
        <div class="form-header"><slot name="form-header"></slot></div>
        <div class="form-elements">
          <div class="form-elemets-inner">
            <slot name="form-elements"></slot>
          </div>
        </div>
        <div class="form-controls">
          <div class="form-controls-inner">
            <slot name="form-controls"></slot>
          </div>
        </div>
        <div class="useful-links">
          <ul>
            <li><a href="">link 1</a></li>
            <li><a href="">link 2</a></li>
            <li><a href="">link 3</a></li>
            <li><a href="">link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  widows: 100%;
}
.container-inner {
  width: 50%;
  margin: 0px auto;
  border: 1px solid #e2e2e2;
  padding: 15px;
}
.form-header {
  text-align: center;
  border-bottom: 1px solid #e2e2e2;
  margin-top: 35px;
}
.form-elements {
  display: flex;
  justify-content: center;
  margin: 5px 0 15px 0;
}
.form-elements-inner {
  width: 50%;
}
.form-controls {
  display: flex;
  justify-content: center;
  text-align: right;
  margin: 15px;
}
.form-controls-inner {
  width: 50%;
}
:slotted(input) {
  width: 100%;
  border: 1px solid #e2e2e2;
  height: 35px;
  border-radius: 5px;
  margin: 5px 0 15px 0;
}
.useful-links {
  display: flex;
  justify-content: center;
  border-top: 1px solid #e2e2e2;
}
ul {
  list-style-type: none;
  margin: 15px 0 0 0;
}

ul li {
  float: left;
  margin-right: 5px;
}
ul li a {
  text-decoration: none;
  color: #666;
}
ul li a:hover {
  color: black;
}
:slotted(button) {
  height: 35px;
  border: 1px solid #e2e2e2;
  padding: 0 15px;
}
</style>
