import { actions } from "./immunizations.actions";

const immunizationsReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_IMMUNIZATION_SUCCESS:
      return action.patientTypes;

    case actions.ADD_IMMUNIZATION_SUCCESS:
      return [
        ...state
      ];

    case actions.UPDATE_IMMUNIZATION_SUCCESS:
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

export { immunizationsReducer };
