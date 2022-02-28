import todoJson  from "../todoMock.json";
import MockAdapter from "axios-mock-adapter";


export const initializeAxiosMockAdapter = (instance) => {
  const mock = new MockAdapter(instance);
  mock.onGet("/todos").reply(() => getTodos());
};

export const getTodos = () => {
  return [200, todoJson]
};
