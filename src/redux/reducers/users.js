import * as siteActions from "../actionTypes";

const initialState = {
  allIds: ["test123@gmail.com", "test321@gmail.com"],
  byIds: {
    "test123@gmail.com": {
      name: "tester 1",
      phone: 1234567890,
      email: "test123@gmail.com",
      password: "123",
      isOnline: false,
    },
    "test321@gmail.com": {
      name: "tester 2",
      phone: 9876543210,
      email: "test321@gmail.com",
      password: "321",
      isOnline: false,
    },
  },
  currentUser: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case siteActions.SIGNUP: {
      const { name, phoneNo, email, password } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, email],
        byIds: {
          ...state.byIds,
          [email]: {
            name,
            phone: phoneNo,
            email,
            password,
            isOnline: true,
          },
        },
        currentUser: email,
      };
    }
    case siteActions.EXISTING_LOGIN: {
      const { email, password } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [email]: {
            ...state.byIds[email],
            isOnline: true,
          },
        },
        currentUser: email,
      };
    }
    case siteActions.LOGOUT: {
      const { userId } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [userId]: {
            ...state.byIds[userId],
            isOnline: false,
          },
        },
        currentUser: null,
      };
    }
    default:
      return state;
  }
}
