<template>
  <div class="container">
    <h2 v-if="this.$attrs.synonymObject.word">{{`You searched: ${this.$attrs.synonymObject.word}`}}</h2>
    <h2 class="definition"
      v-if="this.$attrs.synonymObject.word"
    >{{`Definition: ${this.$attrs.synonymObject.shortDef}`}}</h2>
    <section class="flex-container">
      <div
        v-bind:key="synonym.id"
        v-for="synonym in this.$attrs.synonymObject.synonyms"
      >
        <Synonym v-bind:synonym="synonym" class="synonym"/>
      </div>
    </section>

    <div></div>
  </div>
</template>

<script>
import Synonym from "./Synonym.vue";

export default {
  name: "synonyms",
  components: {
    Synonym
  },
  data() {
    return {
      synonymObject: {}
    };
  },
  props: ["currentSearch"]
};
</script>

<style scoped>
.container {
  border-top: 0px solid;
  background-color: #004d3e;
  background-image: url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png");
  height: 100vh;
  width: 100vw;
}

.container h2 {
  padding: 1.5rem;
  color: black;
}

.flex-container {
  display: flex;
  min-width: 100vw;
}

.synonym {
  min-width: 25vw;
}

.definition {
  margin: 1rem;
}
</style>

