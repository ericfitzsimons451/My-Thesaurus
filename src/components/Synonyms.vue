<template>
  <div>
    <div v-bind:key="synonym.id" v-for="synonym in synonymObject">
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
      synonymObject: []
    }
  },
  props: ["currentSearch"]
}
</script>
