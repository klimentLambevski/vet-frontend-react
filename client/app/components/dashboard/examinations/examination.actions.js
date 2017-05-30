import { createActionMap } from '../../../store/action';
import { showAlert } from '../../../store/alert/alert.actions';
import { ExaminationApi } from '../../../services/api/examination';
import { PatientApi } from '../../../services/api/patients';
import { getPatientsSuccess } from '../patients/patient.actions';
import {push} from "react-router-redux";

export const actions = createActionMap({
  GET_EXAMINATIONS_SUCCESS: '',
  ADD_EXAMINATION_SUCCESS: '',
  UPDATE_EXAMINATION_SUCCESS: ''
}, 'examination');

const getExaminationsSuccess = (examinations) => ({
  type: actions.GET_EXAMINATIONS_SUCCESS,
  examinations
});

const addExaminationSuccess = (examination) => ({
  type: actions.ADD_EXAMINATION_SUCCESS,
  examination
});

const updateExaminationSuccess = (examination) => ({
  type: actions.UPDATE_EXAMINATION_SUCCESS,
  examination
});

export const getExaminations = (patientId) =>
  (dispatch) => PatientApi.getById(patientId)
    .then(
      response => {
        const { examinations, ...patient } = response.data.patient;
        dispatch(getExaminationsSuccess(examinations));
        dispatch(getPatientsSuccess([patient]));
      }
    )
    .catch(
      error => dispatch(showAlert(error))
    );

const createExamination = ({immunization, ...examination}, patientId, dispatch) => {
  return ExaminationApi.saveExamination(examination, patientId, immunization && immunization.id)
    .then(response => {
        dispatch(addExaminationSuccess(response.examination));
        dispatch(push(`/patients/${patientId}/${response.examination.id}`));
      }
    )
    .catch(
      error => dispatch(showAlert(error))
    );
};


const updateExamination = ({immunization, ...examination}, examinationId, dispatch) => {
  return ExaminationApi.updateExamination(examination, examinationId, immunization && immunization.id)
    .then(response => {
        dispatch(updateExaminationSuccess(response.examination));
      }
    )
    .catch(
      error => dispatch(showAlert(error))
    );
};

export const saveExamination = (examination) =>
  (dispatch) =>
    examination.id ?
      updateExamination(examination, examination.id, dispatch):
      createExamination(examination, examination.patientId, dispatch);
