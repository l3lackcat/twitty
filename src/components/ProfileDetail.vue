<template>
  <div class="profile-detail">
    <div class="form-group">
      <label class="col-sm-2 control-label">&nbsp;</label>
      <div class="col-sm-10">
        <img :src="profile.photo" width="128" height="128">
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">Name:</label>
      <div class="col-sm-10">
        <p class="form-control-static">
          {{ profile.name }}
        </p>
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label">Description:</label>
      <div class="col-sm-10">
        <p class="form-control-static">
          {{ profile.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['profile']
}
</script>
