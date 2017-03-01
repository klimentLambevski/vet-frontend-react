import {createActionMap} from "../../../store/action";
import {showAlert} from "../../../store/alert/alert.actions";
import {ImmunizationApi} from '../../../services/api/immunizations';
import {push} from "react-router-redux";

export const actions = createActionMap({
  GET_IMMUNIZATION_SUCCESS: '',
  ADD_IMMUNIZATION_SUCCESS: '',
  UPDATE_IMMUNIZATION_SUCCESS: ''
}, 'immunizations');

const getImmunizationsSuccess = (immunizations) => ({
  type: actions.GET_IMMUNIZATION_SUCCESS,
  immunizations
});

const addImmunizationSuccess = (immunization) => ({
  type: actions.ADD_IMMUNIZATION_SUCCESS,
  immunization
});

const updateImmunizationSuccess = (immunization) => ({
  type: actions.UPDATE_IMMUNIZATION_SUCCESS,
  immunization
});

const createImmunization = (immunization, patientTypeId, dispatch) => {
  return ImmunizationApi.saveImmunization(immunization, patientTypeId)
    .then(response => {
        dispatch(addImmunizationSuccess(response.immunization));
        dispatch(push(`/patient-types/${patientTypeId}/${response.immunization.id}`));
      }
    )
    .catch(
      error => dispatch(showAlert(error))
    );
};


const updateImmunization = (immunization, immunizationId, dispatch) => {
  return ImmunizationApi.updateImmunization(immunization, immunizationId)
    .then(response => {
        dispatch(updateImmunizationSuccess(response.immunization));
      }
    )
    .catch(
      error => dispatch(showAlert(error))
    );
};

export const saveImmunization = (immunization) =>
  (dispatch) =>
    immunization.id ?
      updateImmunization(immunization, immunization.id, dispatch):
      createImmunization(immunization, immunization.patientTypeId, dispatch);

