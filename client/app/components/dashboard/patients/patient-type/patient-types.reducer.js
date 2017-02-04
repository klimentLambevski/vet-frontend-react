import { actions } from './patient-type.actions';

const patientTypesReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_ALL_PATIENT_TYPES_SUCCESS:
      return action.patientType;

    case actions.ADD_PATIENT_TYPE_SUCCESS:
      return [
        ...state,
        action.patientType
      ];

    case actions.UPDATE_PATIENT_TYPE_SUCCESS:
      return state.map(patientType =>
        patientType.id === action.patientType.id ?
          action.patientType
          :
          Object.assign({}, patientType)
      );

    default:
      return state;
  }
};

export { patientTypesReducer };
