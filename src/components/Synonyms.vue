<template>
  <div>
    <h2>{{`You typed the word ${this.$attrs.synonymObject.word}`}}</h2>
    <div v-bind:key="synonym.id" v-for="synonym in this.$attrs.synonymObject.synonyms">
      <Synonym v-bind:synonym="synonym"/>
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
