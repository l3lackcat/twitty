<template>
  <div>
    <div class="panel panel-default center-block" v-if="currentUser">
      <div class="panel-body">
        <div class="panel-body">
          <form @submit.prevent="post">
            <div class="form-group">
              <textarea class="form-control" rows="5" v-model="input"></textarea>
            </div>      
            <button type="" class="btn btn-primary">Post</button>
          </form>
        </div>
      </div>
    </div>
    <div v-for="item in tweet">
      <div class="panel panel-default center-block">
        <div class="panel-body">
          <div class="media">
            <div class="media-left media-top">
              <img class="media-object" :src="findUserPhoto(item.owner)" height="64" width="64">
            </div>
            <div class="media-body">
              <h5 class="media-heading">
                <span>{{ findUserName(item.owner) }}</span><br>
                <small>{{ item.timestamp | fromNow }}</small>
              </h5>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { Tweet, User } from '../services'

export default {
  data () {
    return {
      currentUser: null,
      input: '',
      tweet: [],
      users: []
    }
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      this.currentUser = user
    })
    Tweet.list((data) => {
      this.tweet = data
    })
    User.list((data) => {
      this.users = data
    })
  },
  methods: {
    post () {
      if (!this.input) { return }

      Tweet.post(this.input)
        .then(() => {
          this.input = ''
        })
    },
    findUserName (id) {
      const user = this.users.find((it) => it.$id === id)

      if (user) {
        return user.name
      }

      return ''
    },
    findUserPhoto (id) {
      const user = this.users.find((it) => it.$id === id)

      if (user) {
        return user.photo
      }

      return ''
    }
  }
}
</script>

<style scoped>
.panel {
  width: 400px;
}
</style>
