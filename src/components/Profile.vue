<template>
  <div class="panel panel-default center-block">
    <div class="panel-body">
      <div class="panel-heading">
        <h3>Profile</h3>
      </div>
      <div class="panel-body">
        <form class="form-horizontal">
          <profile-detail :profile="profile"></profile-detail>
          <div class="form-group">
            <label class="col-sm-2 control-label">&nbsp;</label>
            <div class="col-sm-10">
              <router-link to="edit" append class="btn btn-success">Edit</router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { Me } from '../services'
import ProfileDetail from './ProfileDetail'

export default {
  components: {
    ProfileDetail
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
  }
}
</script>
