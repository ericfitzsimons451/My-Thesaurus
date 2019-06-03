<template>
  <div id="app">
    <Header />
    <Search v-on:searchThesaurus="searchThesaurus"/>
    <Synonyms />
  </div>
</template>

<script>
import Header from './components/Header'
import Search from './components/Search'
import Synonyms from './components/Synonyms'
import { apiKey } from './../apiKey'

export default {
  name: 'app',
  components: {
    Header,
    Search,
    Synonyms
  },
  data() {
    return {
      currentSearch: []
    }
  },
  methods: {
    async searchThesaurus(word) {
      const response = await fetch(
        `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${apiKey}`)
      const results = await response.json()
      this.currentSearch = results
    }
  }
}
</script>

<style>
#app {
  background: url('https://live.staticflickr.com/3361/3502143020_6d149d2194_b.jpg') no-repeat center center fixed;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  height: 100vh;
  width: 100vw;
}
</style>
