export default class ApiClient {
  #endpoint;

  constructor(endpoint) {
    this.#endpoint = endpoint;
  }

  // class fields
  // static methods
  // static method() {}

  // instance methods
  readAll(page = 1, pageSize = 5) {
    return fetch(`${this.#endpoint}?_page=${page}&_limit=${pageSize}`).then(
      (response) => response.json()
    );
  }

  readOne(id) {
    return fetch(`${this.#endpoint}/${id}`).then((response) => response.json());
  }

  create(data) {
    return fetch(this.#endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  update(id, data) {
    return fetch(`${this.#endpoint}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }

  delete(id) {
    return fetch(`${this.#endpoint}/${id}`, {
      method: 'DELETE',
    }).then((response) => response.json());
  }
}
