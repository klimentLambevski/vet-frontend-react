import { createActionMap } from '../../../store/action';
import { showAlert } from '../../../store/alert/alert.actions';
import { ExaminationApi } from '../../../services/api/examination';
import { PatientApi } from '../../../services/api/patients';
import { getPatientsSuccess } from '../patients/patient.actions';

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

export const saveExamination = (examination) =>
  (dispatch) => ExaminationApi.save(examination)
    .then(response => examination.id ?
      dispatch(updateExaminationSuccess(response.data.examination))
      :
      dispatch(addExaminationSuccess(response.data.examination))
    )
    .catch(
      error => dispatch(showAlert(error))
    );

