// --------------------------------------------------------------------------
// ES5 Constructor (like. Class) with Module Pattern (IIFE)

import ApiClient from './ApiClient';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const todosService = new ApiClient<Todo>(
  'https://jsonplaceholder.typicode.com/todos'
);

// --------------------------------------------------------------------------

function run(): void {
  run.readAll();
}

run.readAll = (): Promise<void> =>
  todosService
    .readAll()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error.message);
    });

run.readOne = (): Promise<void> =>
  todosService
    .readOne(1)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error.message);
    });

run.create = (): Promise<void> =>
  todosService
    .create({
      id: 0,
      userId: 0,
      title: 'ES 클래스 구문',
      completed: false,
    })
    .then((response) => {
      console.log('생성 성공!', response);
    })
    .catch((error) => {
      console.error(error.message);
    });

run.update = (): Promise<void> =>
  todosService
    .update(2, {
      completed: true,
    })
    .then((response) => {
      console.log('수정 성공!', response);
    })
    .catch((error) => {
      console.error(error.message);
    });

run.delete = (): Promise<void> =>
  todosService
    .delete(3)
    .then((response) => {
      console.log('삭제 성공!', response);
    })
    .catch((error) => {
      console.error(error.message);
    });

run();
