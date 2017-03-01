import {actions} from './patient-type.actions';
import {actions as immunizationActions} from '../../immunization/immunizations.actions'

const patientTypesReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_ALL_PATIENT_TYPES_SUCCESS:
      return action.patientTypes;

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
    case immunizationActions.ADD_IMMUNIZATION_SUCCESS:
      return [...state.map(patientType => {
        if (patientType.id === action.immunization.typeId) {
          patientType.immunizations.push(action.immunization);
        }
        return patientType;
      })];

    case immunizationActions.UPDATE_IMMUNIZATION_SUCCESS:
      return [...state.map(patientType => {
        if (patientType.id === action.immunization.typeId) {
          patientType.immunizations = patientType.immunizations.map(immunization => {
            if (immunization.id === action.immunization.id) {
              return action.immunization;
            }
            return immunization;
          });
        }
        return patientType;
      })];

    default:
      return state;
  }
};

export {patientTypesReducer};
