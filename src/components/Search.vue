<template>
  <div>
    <form @submit="searchThesaurus">
      <input type="text" v-model="word" name="word" placeholder="ex: Verbose">
      <input type="submit" value="Submit" class="submit-btn">
    </form>
  </div>
</template>

<script>
import uuid from "uuid";

export default {
  name: "Search",
  data() {
    return {
      word: ""
    };
  },
  methods: {
    searchThesaurus(e) {
      e.preventDefault();
      this.$emit('searchThesaurus', this.word)
      this.word = "";
    }
  }
};
</script>

<style scoped>
  .submit-btn {
    padding: 15px;
  }
</style>

