<template>
<div>
  <Navbar/>
  <div v-for="(value, key) in person" :key="value.url">
    <p>{{ key }}: {{ value }}</p>
  </div>
</div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
export default {
  components: {
    Navbar
  },
  async asyncData() {
    return {
      person: {}
    }
  },
  async mounted() {
    await this.$store.dispatch('getPerson',this.$route.params.id);
    this.person = this.$store.state.person;
  }
}
</script>

