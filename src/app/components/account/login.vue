<template lang="pug">
  .login
    |Username: 
    input(v-model="username")
    .button(@click="login") [login]
</template>

<script>
import { login } from 'Utils/auth'

export default {
  data: () => ({
    username: ''
  }),
  methods: {
    login () {
      if (this.username === '') return
      login(this.username, true)
      this.$router.push('/dashboard')
    }
  }
}
</script>
