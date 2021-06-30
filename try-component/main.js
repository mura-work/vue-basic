var app = new Vue({
  el: '#app',
  data: {
    message: 'message'
  },
  methods: {
    clickHandler: function(event){
      this.message = this.message.split('').reverse().join('')
    }
  }
})