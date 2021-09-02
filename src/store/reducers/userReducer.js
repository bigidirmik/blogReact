import { LOGIN, LOGOUT } from "../actions/userActions";
import { userInitials } from "../initialValues/userInitials";

const initialState = {
  userInitials: userInitials,
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN:
      return{userInitials:[{user:payload}]}
    case LOGOUT:
      return{userInitials:[]}
    default:
      return state
  }
}
