<template>
  <div class="panel panel-default">
    <h1>Sign In</h1>
    <button type="button" class="btn btn-danger" @click="signIn">
      <i class="fa fa-google-plus" aria-hidden="true"></i> Sign In withGoogle+
    </button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  beforeRouteEnter (to, from, next) {
    const cancel = firebase.auth().onAuthStateChanged((user) => {
      cancel()

      if (user) {
        next(to.query.redirect || '/')
      } else {
        next()
      }
    })

    return
  },
  methods: {
    signIn () {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((res) => {
          this.$router.replace(this.$route.query.redirect || '/')
        })
    }
  }
}
</script>

<style scoped>
.panel {
  padding: 20px;
}
</style>
