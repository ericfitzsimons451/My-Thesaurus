<template>
  <div>
    <div id="app">
      <Header class="head" />
      <Search v-on:searchThesaurus="searchThesaurus"/>
      <Synonyms v-bind:synonymObject="this.currentSearch" v-on:searchThesaurus="searchThesaurus"/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Search from "./components/Search";
import Synonyms from "./components/Synonyms";
import { apiKey } from "./../apiKey";

export default {
  name: "app",
  components: {
    Header,
    Search,
    Synonyms
  },
  data() {
    return {
      currentSearch: {}
    };
  },
  methods: {
    async searchThesaurus(word) {
      const response = await fetch(
        `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${apiKey}`
      );
      const results = await response.json();
      this.cleanResults(results, word);
    },
    cleanResults(results, word) {
      let toReturn = {
        word: word,
        shortDef: results[0].shortdef[0] || null,
        synonyms: results[0].meta.syns[0] || null,
        antonyms: results[0].meta.ants[0] || null
      };
      this.currentSearch = toReturn;
    },
    searchAgain(word) {
      event.preventDefault()
    }
  }
};
</script>

<style>
#app {
  background-color: #004d3e;
  background-image: url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png");
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.bookshelf {
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
