import {createActionMap} from '../action';

export const actions = createActionMap({
  CHANGE_PAGE: '',
  CHANGE_ROWS: '',
}, 'grid');

export const changePage = (gridId, currentPage, rowsOnPage) => ({
  type: actions.CHANGE_PAGE,
  gridId,
  currentPage,
  rowsOnPage,
});

export const changeRows = (gridID, currentRows) => ({
  type: actions.CHANGE_ROWS,
  gridID,
  currentRows,
});
