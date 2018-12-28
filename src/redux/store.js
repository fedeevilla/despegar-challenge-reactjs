import { createStore, applyMiddleware } from "redux";

// const saveState = data => {
//   localStorage.setItem("deliverys", JSON.stringify(data));
// };

const reducer = (state = [], action) => {
  if (action.type === "LOAD_DELIVERYS") {
    try {
      // return JSON.parse(localStorage.getItem("deliverys")) || [];
    } catch (e) {
      // return [];
    }
  } else if (action.type === "ADD_DELIVERY") {
    action.delivery.id = action.id;

    return {
      ...state,
      deliverys: state.deliverys.concat(action.delivery)
    };
  } else if (action.type === "REMOVE_DELIVERY") {
    return {
      ...state,
      deliverys: state.deliverys.filter(delivery => delivery.id !== action.id)
    };
  }

  return state;
};

const logger = store => next => action => {
  let result = next(action);
  return result;
};

const updateLocalStorageDeliverys = store => next => action => {
  let result = next(action);

  if (action.type === "ADD_DELIVERY" || action.type === "REMOVE_DELIVERY") {
    try {
      // saveState(store.getState()["deliverys"]);
    } catch (e) {
      console.log("Error trying to set deliverys", e);
      // saveState([]);
    }
  }
  return result;
};

export default createStore(
  reducer,
  { deliverys: [] },
  applyMiddleware(logger, updateLocalStorageDeliverys)
);
