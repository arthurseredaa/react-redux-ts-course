export interface ITodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionTypes {
  FETCH_TODOS = "FETCH_TODOS",
  FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE",
  SET_TODO_PAGE = "SET_TODO_PAGE"
}

export interface IFetchTodos {
  type: TodoActionTypes.FETCH_TODOS;
}

export interface IFetchTodosSuccess {
  type: TodoActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}

export interface IFetchTodosFailure {
  type: TodoActionTypes.FETCH_TODOS_FAILURE;
  payload: string;
}

export interface ISetTodoPage {
  type: TodoActionTypes.SET_TODO_PAGE;
  payload: number;
}

export type TodoAction = IFetchTodos | IFetchTodosSuccess | IFetchTodosFailure | ISetTodoPage;
