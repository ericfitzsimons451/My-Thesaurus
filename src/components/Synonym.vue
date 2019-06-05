<template>
  <form @submit.prevent>
    <button @click="$emit('searchThesaurus', synonym)">{{synonym}}</button>
  </form>
</template>

<script>
export default {
  name: "synonym",
  props: ["synonym"]
};
</script>

<style scoped>
button {
  padding: 0.5rem;
  border-radius: 15px;
  margin: 0.2rem;
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
}
</style>

