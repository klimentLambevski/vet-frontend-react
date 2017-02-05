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

const createExamination = (examination, patientId, dispatch) => {
  return ExaminationApi.saveExamination(examination, patientId)
    .then(response => {
        dispatch(addExaminationSuccess(response.examination));
        dispatch(push(`/patients/${response.patient.id}/`));
      }
    )
    .catch(
      error => dispatch(showAlert(error))
    );
};


export const updateExamination = (examination) =>
  (dispatch) => ExaminationApi.save(examination)
    .then(response => examination.id ?
      dispatch(updateExaminationSuccess(response.data.examination))
      :
      dispatch(addExaminationSuccess(response.data.examination))
    )
    .catch(
      error => dispatch(showAlert(error))
    );

export const saveExamination = (examination) =>
  (dispatch) =>
    examination.id ?
      updateExamination(examination, examination.id, dispatch):
      createExamination(examination, examination.patientId, dispatch);
