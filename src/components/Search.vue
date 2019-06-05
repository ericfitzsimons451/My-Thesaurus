<template>
  <div class="search">
    <form @submit="searchThesaurus" class="form">
      <input type="text" v-model="word" name="word" placeholder="ex: Verbose" class="input">
      <input type="submit" value="Submit" class="submit-btn">
    </form>
  </div>
</template>

<script>
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
  .search {
    border: 0px solid;
  }

  .form {
    background-color: #004d3e;
    background-image: url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png");
    display: flex;
    justify-content: center;
  }
  .submit-btn {
    padding: 12px;
    border-radius: 15px;
    cursor: pointer;
  }

  .input {
    margin: 10px;
    height: 2rem;
    font-size: 1.3rem;
    width: 20vw;
    padding: .7rem;
  }
</style>

