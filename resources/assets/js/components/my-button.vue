<template>
  <button v-on:click="sayHello">{{ text }}</button>
</template>

<script>
  export default {
    name: "my-button",
    data () {
      return {
        text: 'Press Me',
      }
    },
    methods: {
      sayHello: function () {
        alert('Hello World');
      }
    },
    mounted () {
      console.log('Component mounted.')
    }
  }
</script>
