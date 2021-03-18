export enum UserActionsTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE",
}

export interface IUserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export interface IFetchUsers {
  type: UserActionsTypes.FETCH_USERS;
}
export interface IFetchUsersSuccess {
  type: UserActionsTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}
export interface IFetchUsersFailure {
  type: UserActionsTypes.FETCH_USERS_FAILURE;
  payload: string;
}

export type UsersAction = IFetchUsers | IFetchUsersFailure | IFetchUsersSuccess;
