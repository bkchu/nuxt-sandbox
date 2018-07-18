<template>
  <div>
    <Navbar></Navbar>
    <div class="cards">
      <p v-if="favorites.length === 0">
        Add a favorite from the Home page!
      </p>
      <div v-for="(person) in favorites" :key="person.name">
        <nuxt-link class="card card__link" :to="`/person/${person.url.match(/\d/)[0]}`">
        {{ person.name }}
        </nuxt-link>
        <div class="card__favorite" @click="removeFromFavorites(person.name)">
          Remove
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Navbar
  },
  // data() {
  //   return {
  //     favorites: []
  //   }
  // },
  methods: {
    removeFromFavorites(name) {
      this.$store.dispatch('removeFavorite', {name});
    }
  },
  async mounted() {
    this.favorites = this.$store.state.people.filter(person => person.favorited)
  },
  computed: {
    ...mapGetters({
      favorites: 'getFavorites'
    })
  }
}
</script>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
}

.card {
  border-radius: 3px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
  width: 100px;
  height: 200px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
  padding: 20px;
}

.card__link {
  text-align: center;
  text-decoration: none;
  color: black;
}

.card__favorite {
  margin: 20px 5px;
  padding: 5px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: 2px solid rgb(235, 81, 120);
  border-radius: 9999px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 200ms ease;
  cursor: pointer;
}

.card__favorite:hover {
  color: white;
  background: rgb(235, 81, 120);
}
</style>


