import { createStore, applyMiddleware } from "redux";

const reducer = (state, action) => {
  if (action.type === "ADD_DELIVERY") {
    // var exist = false;

    // for (var i = 0; i < state.deliveries.length; i++) {
    //   if (state.deliveries[i].id === action.delivery.id) {
    //     exist = true;
    //     break;
    //   }
    // }

    // if (exist) {
    //   return {
    //     ...state,
    //     cart: state.deliveries.map(d => {
    //       if (d.id === action.d.id) {
    //         d.qty++;
    //       }
    //       return d;
    //     })
    //   };
    // }
    // action.delivery.qty = 1;

    return {
      ...state,
      deliveries: state.deliveries.concat(action.delivery)
    };
  } else if (action.type === "REMOVE_DELIVERY") {
    return {
      ...state,
      cart: state.deliveries.filter((d, id) => id !== action.id)
    };
  }

  return state;
};

const logger = store => next => action => {
  let result = next(action);
  console.log(store.getState());
  return result;
};

export default createStore(
  reducer,
  { deliveries: [] },
  applyMiddleware(logger)
);
