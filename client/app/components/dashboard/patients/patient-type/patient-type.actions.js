import { createActionMap } from '../../../../store/action';
import { PatientTypeApi } from '../../../../services/api/patient-type';
import { showAlert } from '../../../../store/auth/auth.actions';

export const actions = createActionMap({
  GET_ALL_PATIENT_TYPES_SUCCESS: '',
  ADD_PATIENT_TYPE_SUCCESS: '',
  UPDATE_PATIENT_TYPE_SUCCESS: ''
}, 'patientType');

const getAllPatientTypesSuccess = (patientTypes) => ({
  type: actions.GET_ALL_PATIENT_TYPES_SUCCESS,
  patientTypes
});

const addPatientTypeSuccess = (patientType) => ({
  type: actions.ADD_PATIENT_TYPE_SUCCESS,
  patientType
});

const updatePatientTypeSuccess = (patientType) => ({
  type: actions.UPDATE_PATIENT_TYPE_SUCCESS,
  patientType
});

export const getPatientTypes = () =>
  (dispatch) => PatientTypeApi.getAll()
    .then(
      response => dispatch(getAllPatientTypesSuccess(response.data.patientTypes))
    )
    .catch(
      error => dispatch(showAlert(error))
    );

export const savePatientType = (patientType) =>
  (dispatch) => PatientTypeApi.save(patientType)
    .then(
      response => dispatch(addPatientTypeSuccess(response.data.patientType))
    )
    .catch(
      error => dispatch(showAlert(error))
    );
