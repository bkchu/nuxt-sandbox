import Vuex from 'vuex';
import axios from 'axios';

export default () => {
  return new Vuex.Store({
    state: {
      people: [],
      person: {}
    },
    getters: {
      getFavorites: state =>
        state.people.filter(person => person.favorited === true)
    },
    mutations: {
      setPeople(state, people) {
        Object.assign(state, { people });
      },
      setPerson(state, person) {
        Object.assign(state, { person });
      },
      addFavorite(state, index) {
        state.people[index].favorited = true;
      },
      removeFavorite(state, { index, name }) {
        if (!name) {
          state.people[index].favorited = false;
        } else {
          const indexInPeople = state.people.findIndex(
            person => person.name === name
          );
          state.people[indexInPeople].favorited = false;
        }
      }
    },
    actions: {
      async getPeople({ commit }) {
        const {
          data: { results }
        } = await axios.get('https://swapi.co/api/people');
        const resultsWithDefaultFavorite = results.map(person => {
          person.favorited = false;
          return person;
        });

        commit('setPeople', resultsWithDefaultFavorite);
      },
      async getPerson({ commit }, id) {
        const { data } = await axios.get(`https://swapi.co/api/people/${id}`);
        commit('setPerson', data);
      },
      addFavorite({ commit }, { index }) {
        commit('addFavorite', index);
      },
      removeFavorite({ commit }, payload) {
        commit('removeFavorite', payload);
      },
      nuxtServerInit({ dispatch }) {
        dispatch('getPeople');
      }
    }
  });
};
