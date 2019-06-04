<template>
  <div class="title-icon">
    <img src="../../public/bookFavicon.png" alt="book icon" class="icon">
    <h1>My Thesaurus</h1>
    <h2 class="prompt">Where would you like to take your vocabulary today?</h2>
  </div>
</template>

<script>
export default {
  name: "title-icon"
};
</script>

<style scoped>
.icon {
  width: 8rem;
  position: absolute;
  left: 2rem;
  top: 2rem;
}

.title-icon {
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

.title-icon h1 {
  color: #00294D;
  font-family: "Pacifico", cursive;
  font-size: 3rem;
  background: #a76d60;
  width: 30vw;
  border-radius: 15px;
  padding: 1rem;
  margin-top: 2rem;
  text-shadow: .5px .5px .5px #000, 1px 1px 2px white;
  box-shadow: .5px .5px .5px #000, 1px 1px 2px white;
}

.prompt {
  color: #333;
  text-shadow: 1px 1px 1px #000, 3px 3px 5px #601700;
  margin: 2rem;
}
</style>
