<template>
  <div>
    <Navbar></Navbar>
    <div class="cards">
      <div  v-for="(person, index) in people" :key="person.name">
        <nuxt-link class="card card__link" :to="`/person/${index + 1}`">
        {{ person.name }}
        </nuxt-link>
        <div
          :class="`card__favorite ${person.favorited && ' card__favorite--favorited'}`" 
          @click="person.favorited ? removeFromFavorite({index}) : addToFavorite(index)">
          {{person.favorited ? "REMOVE" : "ADD"}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  async asyncData() {
    
    // console.log(this.$store.state.people);
    return {
      people: []
    };
  },
  async mounted() {
    // const { data } = await this.$axios.get('https://swapi.co/api/people');
    // console.log('data: ', data);
    if(!this.$store.state.people[0]){
      await this.$store.dispatch('getPeople');
    }  
    this.people = this.$store.state.people;

  },
  methods: {
    addToFavorite(index) {
      this.$store.dispatch('addFavorite', {index})
    },
    removeFromFavorite({index}) {
      this.$store.dispatch('removeFavorite', {index})
    }
  }
}
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}
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

.card__favorite--favorited {
  color: white;
  background: rgb(235, 81, 120);
}
</style>

