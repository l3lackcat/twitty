<template>
  <div class="panel panel-default center-block">
    <div class="panel-body">
      <div class="panel-heading">
        <h3>Edit Profile</h3>
      </div>
      <div class="panel-body">
        <profile-form v-model="profile" @save="save" @cancel="back"></profile-form>
      </div>
    </div>
  </div>
</template>

<script>
import { Me } from '../services'
import ProfileForm from './ProfileForm'

export default {
  components: {
    ProfileForm
  },
  data () {
    return {
      profile: {
        name: '',
        desc: ''
      }
    }
  },
  created () {
    Me.get()
      .then((data) => {
        this.profile = data
      })
  },
  methods: {
    save () {
      Me.set(this.profile)
        .then((data) => {
          this.back()
        })
    },
    back () {
      this.$router.push('/profile')
    }
  }
}
</script>
