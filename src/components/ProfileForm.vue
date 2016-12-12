<template>
  <form @submit.prevent="save">
    <div class="form-group">
      <img :src=photo width="128" height="128" v-if="photo"><br><br>
      <a class="btn btn-success" @click="openUpload">Upload Photo</a>
    </div>
    <div class="form-group">
      <label for="input-profile-name">Name</label>
      <input type="text" class="form-control" id="input-profile-name" v-model="name">
    </div>
    <div class="form-group">
      <label for="input-profile-desc">Description</label>
      <input type="text" class="form-control" id="input-profile-desc" v-model="desc">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    <a class="btn btn-default" @click="$emit('cancel')">Cancel</a>
    <upload-modal ref="upload" @success="onUploadedPhoto"></upload-modal>
  </form>
</template>

<script>
import UploadModal from './UploadModal'

export default {
  props: ['value'],
  components: {
    UploadModal
  },
  data () {
    return {
      name: '',
      desc: '',
      photo: ''
    }
  },
  created () {
    this.name = this.value.name
    this.desc = this.value.desc
    this.photo = this.value.photo
  },
  watch: {
    value (newValue, oldValue) {
      this.name = newValue.name
      this.desc = newValue.desc
      this.photo = newValue.photo
    }
  },
  methods: {
    save () {
      this.$emit('input', {
        name: this.name,
        desc: this.desc,
        photo: this.photo
      })

      this.$emit('save')
    },
    openUpload () {
      this.$refs.upload.open()
    },
    onUploadedPhoto (url) {
      this.photo = url
    }
  }
}
</script>
