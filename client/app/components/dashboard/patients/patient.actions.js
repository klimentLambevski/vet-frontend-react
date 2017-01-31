import { createActionMap } from '../../../store/action';
import { savePatientCall } from '../../../services/api/patients';
import { showAlert } from '../../../store/auth/auth.actions';

export const actions = createActionMap({
  ADD_PATIENT_SUCCESS: '',
  UPDATE_PATIENT_SUCCESS: ''
}, 'patient');

const addPatientSuccess = (patient) => ({
  type: actions.ADD_PATIENT_SUCCESS,
  patient: patient
});

const updatePatientSuccess = (patient) => ({
  type: actions.UPDATE_PATIENT_SUCCESS,
  patient: patient
});

export const savePatient = (patient) =>
  (dispatch) => savePatientCall(patient)
    .then((data) => {
      dispatch(addPatientSuccess(data));
    })
    .catch(error => {
      dispatch(showAlert(error));
    });
