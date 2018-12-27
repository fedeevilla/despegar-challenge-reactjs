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
