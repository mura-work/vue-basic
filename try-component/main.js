
var counterButton = Vue.extend({
  template: '<span>{{item.count}}個<button v-on:click="addToCart">追加</button></span>',
  methods: {
    addToCart: function(){
      this.counter += 1;
      this.$emit('increments')
    }
  },
})

new Vue({
  el: '#app',
  components: {
    'counter-button': counterButton
  },
  data: {
    total: 0,
    listItems: [
      {name: 'apple', count: 0},
      {name: 'banana', count: 0},
      {name: 'orange', count: 0},
    ]
  },
  methods: {
    incrementCartStatus: function(){
      this.total += 1
    },
    clearCount: function(){
      this.total = 0
    }
  }
})