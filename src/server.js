import { createServer, Model } from 'miragejs';
export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    models: {
      notes: Model,
    },
    seeds(server) {
        server.create('todo', {
            id: 1,
            title: 'todo1'
        });
        server.create('todo', {
            id: 2,
            title: 'todo2'
        });
        server.create('todo', {
            id: 3,
            title: 'todo3'
        });
    },
    routes() {
      this.namespace = 'api/todo';
      this.get('/', (schema, request) => {
        return schema.todo.all();
      });
      this.get('/:id', (schema, request) => {
        let id = request.params.id;
        return schema.todo.find(id);
      });
      this.post('/', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.todo.create(attrs);
      });
      this.patch('/:id', (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let note = schema.todo.find(id);
        return note.update(newAttrs);
      });
      this.delete('/:id', (schema, request) => {
        let id = request.params.id;
        return schema.todo.find(id).destroy();
      });
    },
  });
  return server;
}