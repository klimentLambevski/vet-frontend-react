import {createActionMap} from "../../../store/action";
import {showAlert} from "../../../store/alert/alert.actions";

export const actions = createActionMap({
  GET_IMMUNIZATION_SUCCESS: '',
  ADD_IMMUNIZATION_SUCCESS: '',
  UPDATE_IMMUNIZATION_SUCCESS: ''
}, 'immunizations');

const getImmunizationsSuccess = (immunizations) => ({
  type: actions.GET_IMMUNIZATION_SUCCESS,
  immunizations
});

export const getImmunizations = () =>
  (dispatch) => CustomerApi.getAll()
    .then(
      response => dispatch(getImmunizationsSuccess(response.data.immunizations))
    )
    .catch(
      error => dispatch(showAlert(error))
    );
