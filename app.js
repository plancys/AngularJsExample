(function () {
    var app = angular.module('todo', [ ]);

    app.controller('TodoController', ['$scope' , function ($scope) {
        this.products = demoTodos;
        console.log($scope);
        this.addNew = function (todo_desc) {
            var added = {};
            added.desc = todo_desc;
            added.done = false;
            demoTodos.push(added);
            todo_desc = {};
        };

        this.removeTodo = function (idx) {
            console.log(idx);
            this.products.splice(idx, 1);
        };

    }]);

    demoTodos = [
        {
            desc: 'Wyrzucić śmieci',
            done: false
        },
        {
            desc: 'Wyrzucić śmieci',
            done: true
        }
    ]
})();





