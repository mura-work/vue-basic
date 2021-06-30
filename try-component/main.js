Vue.component('fruits-list-title', {
  template: '<h1>フルーツ一覧</h1>'
})

Vue.component('fruits-list', {
  template: '<div><fruits-list-title></fruits-list-title></div>'
})

var FruitsListsTitle = Vue.extend({
  template: '<li>aaa</li>'
})

var FruitsList = Vue.extend({
  template: '<ul>bb</ul>'
})

new Vue({
  el: '#app',
  components: {
    'fruits-list-title': FruitsListsTitle,
    'fruits-list': FruitsList
  }
})