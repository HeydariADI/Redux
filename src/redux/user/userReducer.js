import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  data: [],
  erorr: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        erorr: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        erorr: action.payload,
      };
    default:
      return state;
  }
}
