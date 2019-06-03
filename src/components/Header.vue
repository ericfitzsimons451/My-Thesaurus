<template>
  <div class="header">
    <h1>My Thesaurus</h1>
    <h2 class="prompt">Where would you like to take your vocabulary today?</h2>
  </div>
</template>

<script>
export default {
  name: "header"
};
</script>

<style scoped>
.header {
  text-align: center;
  padding: 10px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header h1 {
  color: #333;
  font-family: "Pacifico", cursive;
  font-size: 3rem;
  background: #a76d60;
  width: 30vw;
  border-radius: 15px;
}

.prompt {
  color: #333;
  text-shadow: 1px 1px 1px #000, 3px 3px 5px #601700;
}
</style>
