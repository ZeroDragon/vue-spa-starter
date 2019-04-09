<template lang="pug">
  .dashboard
    |hello from dashboard page, {{username}} 
    router-link(to="/logout") logout
</template>
<script>
import { isLoggedIn } from 'Utils/auth'
export default {
  computed: {
    username () {
      return this.$store.state.username
    }
  },
  beforeMount () {
    const user = isLoggedIn()
    this.$store.commit('setUser', user)
  }
}
</script>
