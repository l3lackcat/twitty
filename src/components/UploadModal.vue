<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Upload</h4>
        </div>
        <div class="modal-body">
          <div class="progress" v-show="uploading">
            <div class="progress-bar progress-bar-success" ref="progress">
              <span>Uploading...</span>
            </div>
          </div>
          <input type="file" ref="file" @change="onSelectedFile" style="display: none;">
          <button type="button" class="btn btn-primary" @click="openFileDialog">Select File</button>
          <button type="button" class="btn btn-default" @click="close">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data: () => {
    return {
      uploading: false
    }
  },
  methods: {
    open () {
      window.$(this.$el).modal('show')
    },
    close () {
      window.$(this.$el).modal('hide')
    },
    onSelectedFile () {
      const file = this.$refs.file.files[0]

      if (!file) { return }

      this.uploading = true
      const task = firebase.storage().ref(`files/${Date.now()}`).put(file)

      task.on(firebase.storage.TaskEvent.STATE_CHANGED, (o) => {
        const percent = o.bytesTransferred / o.totalBytes * 100
        window.$(this.$refs.progress).css('width', percent + '%')
      })

      task.then((snapshot) => {
        this.$emit('success', snapshot.downloadURL)
        this.uploading = false
        this.close()
      })
    },
    openFileDialog () {
      this.$refs.file.click()
    }
  }
}
</script>

<style scoped>

</style>