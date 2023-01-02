import * as siteActions from "../actionTypes";

const initialState = "";

export default function (state = initialState, action) {
  switch (action.type) {
    case siteActions.SET_QUERY_STRING: {
      return action.payload;
    }
    case siteActions.RESET_QUERY_STRING: {
      return "";
    }
    default:
      return state;
  }
}
