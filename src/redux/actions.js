let nextId = 1;

export const addDelivery = delivery => {
  return {
    type: "ADD_DELIVERY",
    id: nextId++,
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
