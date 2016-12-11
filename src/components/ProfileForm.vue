<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <label for="input-profile-name">Name</label>
      <input type="text" class="form-control" id="input-profile-name" v-model="name">
    </div>
    <div class="form-group">
      <label for="input-profile-desc">Description</label>
      <input type="text" class="form-control" id="input-profile-desc" v-model="desc">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    <button class="btn btn-default" @click="$emit('cancel')">Cancel</button>
  </form>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      name: '',
      desc: ''
    }
  },
  created () {
    this.name = this.value.name
    this.desc = this.value.desc
  },
  watch: {
    value (newValue, oldValue) {
      this.name = newValue.name
      this.desc = newValue.desc
    }
  },
  methods: {
    save () {
      this.$emit('input', {
        name: this.name,
        desc: this.desc
      })

      this.$emit('save')
    }
  }
}
</script>
