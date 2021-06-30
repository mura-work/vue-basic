Vue.component('list-item', {
  props: {
    listItems: {
      type: Object,
      required: true
    }
  },
  template: '<li>{{listItems.name}}</li>'
})

new Vue({
  el: '#app',
  data: {
    listItems: [
      {name: 'apple'},
      {name: 'orange'}
    ]
  }
})