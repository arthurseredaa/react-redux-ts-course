import { UsersAction } from './../../types/user';
import { Dispatch } from "react";
import { UserActionsTypes } from "../../types/user"
import axios from "axios";

// https://jsonplaceholder.typicode.com/users
export const fetchUsers = () => async (dispatch: Dispatch<UsersAction>) => {
  try {
    dispatch({ type: UserActionsTypes.FETCH_USERS });
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setTimeout(() => {
      dispatch({ type: UserActionsTypes.FETCH_USERS_SUCCESS, payload: response.data });
    }, 1000);
  } catch (error) {
    dispatch({ type: UserActionsTypes.FETCH_USERS_FAILURE, payload: "Error when fetching users" });
  }
}
