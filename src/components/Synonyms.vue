<template>
  <div>
    <div v-bind:key="synonym.id" v-for="synonym in currentSearch">
      <h1>{{synonym.meta.syns[0]}}</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'synonyms',
  data() {
    return {
      currentSearch: currentSearch
    }
  },
  props: ["currentSearch"]
}
</script>
