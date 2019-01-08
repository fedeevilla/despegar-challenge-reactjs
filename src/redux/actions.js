export const addDelivery = delivery => {
  return {
    type: "ADD_DELIVERY",
    delivery
  };
};

export const updateDelivery = (id, delivery) => {
  return {
    type: "UPDATE_DELIVERY",
    id,
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
