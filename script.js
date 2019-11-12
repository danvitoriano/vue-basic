Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        lista: [
            { id: 0, text: 'tomate' },
            { id: 1, text: 'laranja' },
            { id: 2, text: 'abacaxi' }
        ]
    }
});
