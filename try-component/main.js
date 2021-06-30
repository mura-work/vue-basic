Vue.component('list-items',{
  template: '<ul><li>{{num1}}</li><li>{{num2}}</li><li>{{num3}}</li></ul>',
  data: function(){
    return {num1: 5, num2: 2, num3: 8}
  }
})

new Vue({
  el: '#app'
})