import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {count: 0}

export const countReducer = (state = initialState , action) => {
  switch (action.type) {
    case "I":
      return { ...state, count: state.count + action.payload };
    case "D":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  suleim: {},
  auth: {},
  countState: countReducer
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
