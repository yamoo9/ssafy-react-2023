// --------------------------------------------------------------------------
// ES5 Constructor (like. Class) with Module Pattern (IIFE)

const ApiClient = (function () {
  function ApiClient(endpoint) {
    this._endpoint = endpoint;
  }

  ApiClient.prototype.readAll = function (page = 1, pageSize = 5) {
    return fetch(`${this._endpoint}?_page=${page}&_limit=${pageSize}`).then(
      (response) => response.json()
    );
  };

  ApiClient.prototype.readOne = function (id) {
    return fetch(`${this._endpoint}/${id}`).then((response) => response.json());
  };

  ApiClient.prototype.create = function (data) {
    return fetch(this._endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };

  ApiClient.prototype.update = function (id, data) {
    return fetch(`${this._endpoint}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }).then((response) => response.json());
  };

  ApiClient.prototype.delete = function (id) {
    return fetch(`${this._endpoint}/${id}`, {
      method: 'DELETE',
    }).then((response) => response.json());
  };

  return ApiClient;
})();

const todosService = new ApiClient(
  'https://jsonplaceholder.typicode.com/todos'
);

// --------------------------------------------------------------------------

function run() {
  run.readAll();
}

run.readAll = () =>
  todosService
    .readAll()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error.message);
    });

run.readOne = () =>
  todosService
    .readOne(1)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error.message);
    });

run.create = () =>
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

run.update = () =>
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

run.delete = () =>
  todosService
    .delete(3)
    .then((response) => {
      console.log('삭제 성공!', response);
    })
    .catch((error) => {
      console.error(error.message);
    });

run();
