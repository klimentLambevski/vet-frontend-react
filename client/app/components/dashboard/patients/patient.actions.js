import { createActionMap } from '../../../store/action';
import { showAlert } from '../../../store/auth/auth.actions';
import { PatientApi } from '../../../services/api/patients';
import { CustomerApi } from '../../../services/api/customer';
import {push} from "react-router-redux";

export const actions = createActionMap({
  GET_PATIENTS_SUCCESS: '',
  ADD_PATIENT_SUCCESS: '',
  UPDATE_PATIENT_SUCCESS: ''
}, 'patient');

export const getPatientsSuccess = (patients) => ({
  type: actions.GET_PATIENTS_SUCCESS,
  patients
});

const addPatientSuccess = (patient) => ({
  type: actions.ADD_PATIENT_SUCCESS,
  patient: patient
});

const updatePatientSuccess = (patient) => ({
  type: actions.UPDATE_PATIENT_SUCCESS,
  patient: patient
});

export const getPatients = (customerId) =>
  (dispatch) => CustomerApi.getById(customerId)
    .then(
      response => dispatch(
        getPatientsSuccess(response.data.customer.patients)
      )
    )
    .catch(
      error => dispatch(showAlert(error))
    );

const createPatient = (patient, customerId, dispatch) => {
  return PatientApi.savePatient(patient, customerId)
    .then(response => {
        dispatch(addPatientSuccess(response.patient));
        dispatch(push(`/patients/${response.patient.id}/`));
      }
    )
    .catch(
      error => dispatch(showAlert(error))
    );
};

const updatePatient = (patient, patientId, dispatch) => {
  return PatientApi.updatePatient(patient, patientId)
    .then(response => {
        dispatch(updatePatientSuccess(response.patient));
      }
    )
    .catch(
      error => dispatch(showAlert(error))
    );
};

export const savePatient = (patient) =>
  (dispatch) =>
    patient.id ?
      updatePatient(patient, patient.id, dispatch):
      createPatient(patient, patient.customerId, dispatch);
