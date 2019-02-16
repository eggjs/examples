<html>
  <head>
    <title>Node.js TodoMVC</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/todomvc-common@1.0.5/base.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/todomvc-app-css@2.1.2/index.css">
  </head>
  <body>
    {% raw %}
    <div id="app">
      <!-- snippets copy from http://todomvc.com/examples/vue/ -->
      <section class="todoapp" v-cloak>
        <header class="header">
          <h1>todos</h1>
          <input class="new-todo" placeholder="What needs to be done?" v-model="newTodo" @keyup.enter="addTodo">
        </header>
        <section class="main" v-show="todoList.length">
          <input class="toggle-all" type="checkbox">
          <label for="toggle-all">Mark all as complete</label>
          <ul class="todo-list">
            <li class="todo" v-for="todo in todoList" :key="todo.id" :class="{ completed: todo.completed }">
              <div class="view">
                <input class="toggle" type="checkbox" :checked="todo.completed" @click="completeTodo(todo)">
                <label>{{ todo.title }}</label>
                <button class="destroy" @click="removeTodo(todo)"></button>
              </div>
            </li>
          </ul>
        </section>
        <footer class="footer" v-show="todoList.length">
          <ul class="filters">
            <li><a @click="listData()" :class="{ selected: completed === undefined }">All</a></li>
            <li><a @click="listData(false)" :class="{ selected: completed === false }">Active</a></li>
            <li><a @click="listData(true)" :class="{ selected: completed === true }">Completed</a></li>
          </ul>
        </footer>
      </section>
    </div>
    {% endraw %}
  </body>
  <script src="//cdn.jsdelivr.net/npm/vue"></script>
  <script src="//cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <script src="//cdn.jsdelivr.net/npm/js-cookie/src/js.cookie.min.js"></script>
  <script src="/public/main.js"></script>
</html>
