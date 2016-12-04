<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="media">
        <div class="media-left media-top">
          <img class="media-object" src="../assets/logo.png" height="64" width="64">
        </div>
        <div class="media-body">
          <h4 class="media-heading">
            <span>{{ name }}</span>
            <small>{{ date }}</small>
          </h4>
          <p>{{ desc }}</p>
          <div>
            <i class="fa fa-heart"></i> {{ like }}  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { required: true },
    desc: { required: true },
    date: { required: true },
    like: { required: true }
  }
}
</script>

