<template>
  <form v-on:click="searchAgain">
    <button>{{synonym}}</button>
  </form>
</template>

<script>
export default {
  name: "synonym",
  props: ["synonym"],
  methods: {
    searchAgain(e) {
      e.preventDefault()
      this.$attrs.synonymObject.synonyms.find(synonym => {
        if (e.target.innerText === synonym) {
          this.$emit("searchAgain", synonym)
        }
      })
    }
  }
}
</script>

<style scoped>
  button {
    padding: .5rem;
    border-radius: 15px;
    margin: .2rem;
  }
</style>

