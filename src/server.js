import { createServer, Model } from 'miragejs';
export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    models: {
      todos: Model,
    },
    seeds(server) {
        server.create('todo', {
            title: 'todo1',
        });
        server.create('todo', {
            title: 'todo2',
        });
        server.create('todo', {
            title: 'todo3',
        });
    },
    routes() {
      this.namespace = 'api/todo';
      this.get('', (schema) => {
        return schema.todos.all();
      });
      this.get('/:id', (schema, request) => {
        let id = request.params.id;
        return schema.todos.find(id);
      });
      this.post('/', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.todos.create(attrs);
      });
      this.patch('/:id', (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let note = schema.todos.find(id);
        return note.update(newAttrs);
      });
      this.delete('/:id', (schema, request) => {
        let id = request.params.id;
        return schema.todos.find(id).destroy();
      });
    },
  });
  return server;
}