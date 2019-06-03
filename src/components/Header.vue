<template>
  <div class="header">
    <h1>My Thesaurus</h1>
    <h2 class="prompt">Input a word and watch your vocabulary grow!</h2>
  </div>
</template>

<script>
export default {
  name: "header"
}
</script>

<style scoped>
  .header {
    color: #333;
    text-align: center;
    padding: 10px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .header h1 {
    font-family: 'Pacifico', cursive;
    font-size: 3rem;
    background: red;
    width: 30vw;

  }
  
  .prompt {
    color:blue;    
  }
</style>
