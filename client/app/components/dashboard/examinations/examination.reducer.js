import { actions } from "./examination.actions";

const examinationsReducer = (state = [], action) => {
  switch (action.type) {
    case actions.GET_EXAMINATIONS_SUCCESS:
      return action.examinations;

    case actions.ADD_EXAMINATION_SUCCESS:
      return [
        ...state,
        action.examination
      ];

    case actions.UPDATE_EXAMINATION_SUCCESS:
      return state.map(examination =>
        examination.id === action.examination.id ?
          action.examination
          :
          Object.assign({}, examination)
      );

    default:
      return state;
  }
};

export { examinationsReducer };
