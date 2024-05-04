<template>
  <div v-if="submitted">
    <h1>tebrikler, postunuz başarıyla gönderildi</h1>
    <button v-on:click="newBlog()">yeni post gönder</button>
  </div>
  <div id="add-blog" v-if="!submitted">
    <h2>yeni blog post ekleme formu</h2>
    <form>
      <label for="title">form başlıgı</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label for="content">blog içeriği</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label> çizgi roman </label>
        <input type="checkbox" value="cizgi roman" v-model="blog.categories" />
        <label> hikaye </label>

        <input type="checkbox" value="hikaye" v-model="blog.categories" />
        <label> masal </label>

        <input type="checkbox" value="masal" v-model="blog.categories" />
        <label> şiir </label>

        <input type="checkbox" value="siir" v-model="blog.categories" />
      </div>
      <label for="author">yazar : </label>
      <select v-model="blog.author">
        <option value="">lütfen yazar seçiniz</option>
        <option v-for="author in authors" v-bind:value="author">
          {{ author }}
        </option>
      </select>
      <button v-on:click.prevent="gonder">bloglara ekle</button>
    </form>
    <div id="preview">
      <h3>blog önizleme</h3>
      <p>blog başlığı : {{ blog.title }}</p>
      <p>blog içeriği</p>
      <p>{{ blog.content }}</p>
      <p>kategoriler :</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>yazar : {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ["burak", "zafer", "özcan", "şevval", "naim"],
      submitted: false,
    };
  },
  methods: {
    gonder: function () {
      self = this;
      fetch(process.env.FIREBASE_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.blog),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          self.submitted = true;
          self.blog.title = "";
          self.blog.content = "";
          self.blog.categories = [];
          self.blog.author = "";
        })
        .catch((err) => {
          console.log(err);
          self.submitted = false;
        });
    },
    newBlog: function () {
      self.submitted = false;
    },
  },
};
</script>
<style scoped>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 15px;
}
#checkboxes label {
  display: inline-block;
}
</style>
