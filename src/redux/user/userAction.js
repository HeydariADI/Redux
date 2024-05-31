import axios from "axios";
import {
  FETCH_USERS_REQEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";

function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQEST,
  };
}
function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
}
function fetchUsersFailure(err) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: err,
  };
}

export function fetchUsers() {
  return (dispatch) => {
    // dispatch({ type: FETCH_USERS_REQEST });
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) =>
        dispatch(
          // { type: FETCH_USERS_SUCCESS, payload:data }
          fetchUsersSuccess(res.data)
        )
      )
      .catch((err) =>
        dispatch(
          // { type: FETCH_USERS_FAILURE, payload: err.message }
          fetchUsersFailure(err.message)
        )
      );
  };
}
