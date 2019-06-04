<template>
  <div class="wrapper">
    <Header />
    <Search v-on:searchThesaurus="searchThesaurus"/>
    <Synonyms />
  </div>
</template>

<script>
// import Header from './components/Header'
// import Search from './components/Search'
// import Synonyms from './components/Synonyms'
export default {
  name: "Wrapper",
  components: {
    Header,
    Search,
    Synonyms
  }
}
</script>

<style>
  .wrapper {
    background: url('https://live.staticflickr.com/3361/3502143020_6d149d2194_b.jpg') no-repeat center center fixed
  }
</style>

