import { createStore, applyMiddleware, compose } from "redux";

const saveState = data => {
  localStorage.setItem("deliverys", JSON.stringify(data));
};

const maxID = state => {
  let max = 0;
  for (var i = 0; i < state.deliverys.length; i++) {
    if (parseInt(state.deliverys[i].id) > max) {
      max = parseInt(state.deliverys[i].id);
    }
  }
  max++;
  return max;
};

const deliverys = (state = [], action) => {
  if (action.type === "LOAD_DELIVERY") {
    for (var i = 0; i < state.deliverys.length; i++) {
      if (parseInt(state.deliverys[i].id) === parseInt(action.id)) {
        return state.deliverys[i];
      }
    }
  } else if (action.type === "LOAD_DELIVERYS") {
    try {
      return {
        ...state,
        deliverys: JSON.parse(localStorage.getItem("deliverys")) || []
      };
    } catch (e) {
      return [];
    }
  } else if (action.type === "ADD_DELIVERY") {
    action.delivery.id = maxID(state);

    return {
      ...state,
      deliverys: state.deliverys.concat(action.delivery)
    };
  } else if (action.type === "UPDATE_DELIVERY") {
    return {
      ...state,
      deliverys: state.deliverys.map(item => {
        if (parseInt(item.id) !== parseInt(action.id)) {
          return item;
        }
        return {
          ...item,
          ...action.delivery
        };
      })
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

  if (
    action.type === "ADD_DELIVERY" ||
    action.type === "REMOVE_DELIVERY" ||
    action.type === "UPDATE_DELIVERY"
  ) {
    try {
      saveState(store.getState()["deliverys"]);
    } catch (e) {
      console.log("Error trying to set deliverys", e);
      saveState([]);
    }
  }
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(logger, updateLocalStorageDeliverys)
);

export default createStore(deliverys, { deliverys: [] }, enhancer);
