import { actions } from "./customer.actions";

const customersReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_CUSTOMERS_SUCCESS:
      return action.customers;

    case actions.ADD_CUSTOMER_SUCCESS:
      return [
        ...state,
        action.customer
      ];

    case actions.UPDATE_CUSTOMER_SUCCESS:
      return state.map(customer =>
        customer.id === action.customer.id ?
          action.customer
          :
          Object.assign({}, customer)
      );

    default:
      return state;
  }
};

export default customersReducer;
