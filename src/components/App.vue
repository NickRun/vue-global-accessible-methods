<template>
  <div @click= "changeMessage">
    {{ sharedState.message }}
  </div>
</template>

<script>
// Import Store
import store from '../store'
// Import Methods
import changeMessage from '../methods/changeMessage'

export default {
  data () {
    return {
      sharedState: store.state
    }
  },
  methods: {
    changeMessage: changeMessage
  }
}
</script>
