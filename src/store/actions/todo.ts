import { TodoAction, TodoActionTypes } from './../../types/todo';
import { Dispatch } from "react";
import axios from "axios";

// https://jsonplaceholder.typicode.com/todos
export const fetchTodo = (pageNumber = 1, limit = 10) => async (dispatch: Dispatch<TodoAction>) => {
  try {
    dispatch({ type: TodoActionTypes.FETCH_TODOS });
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
      params: { _page: pageNumber, _limit: limit }
    });
    setTimeout(() => {
      dispatch({ type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data });
    }, 1000);
  } catch (error) {
    dispatch({ type: TodoActionTypes.FETCH_TODOS_FAILURE, payload: "Error when fetching todos" });
  }
}

export const setTodoPage = (pageNumber: number): TodoAction => ({ type: TodoActionTypes.SET_TODO_PAGE, payload: pageNumber });
