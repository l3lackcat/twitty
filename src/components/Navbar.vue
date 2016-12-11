<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">Twitty</router-link>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <router-link tag="li" to="/signin" active-class="active" exact v-if="!currentUser">
            <a>Sign In</a>
          </router-link>
          <li class="dropdown" v-else="currentUser">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <img src="../assets/logo.png" alt="" height="16" width="16">
              <span>{{ currentUser.displayName }}</span>
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <router-link tag="li" to="/profile">
                <a>Profile</a>
              </router-link>
              <li role="separator" class="divider"></li>
              <li>
                <a href="javascript:;" @click="signOut">Sign out</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      currentUser: null
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      this.currentUser = user
    })
  },
  methods: {
    signOut () {
      firebase.auth().signOut()
      this.$router.replace('/')
    }
  }
}
</script>
