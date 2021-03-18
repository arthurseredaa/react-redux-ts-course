import { IUserState, UserActionsTypes, UsersAction } from "../../types/user"

const initialState: IUserState = {
  users: [],
  loading: false,
  error: null
}

export const userReducer = (state = initialState, action: UsersAction): IUserState => {
  switch (action.type) {
    case UserActionsTypes.FETCH_USERS:
      return { ...state, loading: true, error: null }
    case UserActionsTypes.FETCH_USERS_SUCCESS:
      return { users: action.payload, loading: false, error: null }
    case UserActionsTypes.FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
