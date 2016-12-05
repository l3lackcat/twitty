<template>
  <div class="items">
    <div v-for="item in items">
      <item :name="item.name" :desc="item.desc" :date="item.date" :like="item.like"></item>
    </div>
  </div>
</template>

<script>
import Item from './Item'

export default {
  components: {
    Item
  },
  data () {
    return {
      items: [
        {
          name: 'Name',
          desc: 'Description goes here...',
          date: 'xxx a second ago',
          like: 0
        },
        {
          name: 'Name',
          desc: 'Description goes here...',
          date: 'xxx a second ago',
          like: 0
        },
        {
          name: 'Name',
          desc: 'Description goes here...',
          date: 'xxx a second ago',
          like: 0
        }
      ]
    }
  }
}
</script>