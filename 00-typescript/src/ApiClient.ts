type IdType = string | number;

enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
}

class ApiClient<T> {
  #endpoint;

  constructor(endpoint: string) {
    this.#endpoint = endpoint;
  }

  async readAll(page: number = 1, pageSize: number = 5): Promise<T[]> {
    const response = await fetch(
      `${this.#endpoint}?_page=${page}&_limit=${pageSize}`
    );
    return await response.json();
  }

  async readOne(id: IdType): Promise<T> {
    const response = await fetch(`${this.#endpoint}/${id}`);
    return await response.json();
  }

  async create(data: T): Promise<T> {
    const response = await fetch(this.#endpoint, {
      method: HTTP_METHODS.POST,
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async update(id: IdType, data: Partial<T>): Promise<T> {
    const response = await fetch(`${this.#endpoint}/${id}`, {
      method: HTTP_METHODS.PATCH,
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async delete(id: IdType): Promise<T> {
    const response = await fetch(`${this.#endpoint}/${id}`, {
      method: HTTP_METHODS.DELETE,
    });
    return await response.json();
  }
}

export default ApiClient;
