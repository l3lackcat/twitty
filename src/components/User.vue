<template>
  <div class="panel panel-default center-block">
    <div class="panel-body">
      <div class="panel-heading">
        <h3>User profile</h3>
      </div>
      <div class="panel-body">
        <form class="form-horizontal" v-if="data">
          <profile-detail :profile="data"></profile-detail>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { User } from '../services'
import ProfileDetail from './ProfileDetail'

export default {
  components: {
    ProfileDetail
  },
  data () {
    return {
      data: null
    }
  },
  created () {
    this.reload()
  },
  watch: {
    $route: 'reload'
  },
  methods: {
    reload () {
      User.subscribe(this.$route.params.id, (data) => {
        this.data = data
      })
    }
  }
}
</script>
