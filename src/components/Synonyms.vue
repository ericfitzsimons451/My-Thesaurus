<template>
  <div class="container">
    <h2 v-if="this.$attrs.synonymObject.word">{{`You typed the word ${this.$attrs.synonymObject.word}`}}</h2>
    <h2 v-if="this.$attrs.synonymObject.word">{{`Definition: ${this.$attrs.synonymObject.shortDef}`}}</h2>
    <div v-bind:key="synonym.id" v-for="synonym in this.$attrs.synonymObject.synonyms">
      <Synonym v-bind:synonym="synonym" />
    </div>
  </div>
</template>

<script>
import Synonym from './Synonym.vue'

export default {
  name: 'synonyms',
  components: {
    Synonym
  },
  data() {
    return {
      synonymObject: {}
    }
  },
  props: ["currentSearch"]
}
</script>

<style>

</style>

