<template>
  <nav class="navbar">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/favorites">Favorites</nuxt-link>
  </nav>
</template>

<style scoped>
.navbar {
  padding: 10px;
  display: flex;
  justify-content: center;
}

.navbar a {
  margin: 5px;
  padding: 15px;
  text-decoration: none;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: none;
  border-radius: 4px;
  background: rgb(240, 238, 238);
  transition: all 200ms ease;
}

.navbar a:hover {
  color: white;
  background: slategray;
}
</style>

