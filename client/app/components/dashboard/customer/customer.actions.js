import { createActionMap } from '../../../store/action';
import { showAlert } from '../../../store/alert/alert.actions';
import { CustomerApi } from '../../../services/api/customer';

export const actions = createActionMap({
  GET_CUSTOMERS_SUCCESS: '',
  ADD_CUSTOMER_SUCCESS: '',
  UPDATE_CUSTOMER_SUCCESS: ''
}, 'customer');

const getCustomersSuccess = (customers) => ({
  type: actions.GET_CUSTOMERS_SUCCESS,
  customers
});

const addCustomerSuccess = (customer) => ({
  type: actions.ADD_CUSTOMER_SUCCESS,
  customer
});

const updateCustomerSuccess = (customer) => ({
  type: actions.UPDATE_CUSTOMER_SUCCESS,
  customer
});

export const getCustomers = () =>
  (dispatch) => CustomerApi.getAll()
    .then(
      response => dispatch(getCustomersSuccess(response.data.customers))
    )
    .catch(
      error => dispatch(showAlert(error))
    );

export const saveCustomer = (customer) =>
  (dispatch) => CustomerApi.saveCustomer(customer)
    .then(response => customer.id ?
      dispatch(updateCustomerSuccess(response.data.createCustomer.customer))
      :
      dispatch(addCustomerSuccess(response.data.createCustomer.customer))
    )
    .catch(
      error => dispatch(showAlert(error))
    );

