export const addDelivery = delivery => {
  return {
    type: "ADD_DELIVERY",
    delivery
  };
};

export const removeDelivery = id => {
  return {
    type: "REMOVE_DELIVERY",
    id
  };
};

export const loadDeliverys = () => {
  return {
    type: "LOAD_DELIVERYS"
  };
};

export const loadDelivery = id => {
  return {
    type: "LOAD_DELIVERY",
    id
  };
};
