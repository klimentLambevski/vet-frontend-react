import { actions } from "./patient.actions";

const patientsReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_PATIENTS_SUCCESS:
      return action.patients;

    case actions.ADD_PATIENT_SUCCESS:
      return [
        ...state,
        action.patient
      ];

    case actions.UPDATE_PATIENT_SUCCESS:
      return state.map(patient =>
        patient.id === action.patient.id ?
          action.patient
          :
          Object.assign({}, patient)
      );

    default:
      return state;
  }
};

export { patientsReducer };
