import {createActionMap} from '../../../store/action';
import {showAlert} from '../../../store/alert/alert.actions';
import {CustomerApi} from '../../../services/api/customer';
import {push} from "react-router-redux";

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
      error => {
        console.log(error);
        dispatch(showAlert(error))
      }
    );

const createCustomer = (customer, dispatch) => {
  return CustomerApi.saveCustomer(customer)
    .then(response => {
        dispatch(addCustomerSuccess(response.customer));
        dispatch(push('/customers/' + response.customer.id));
      }
    )
    .catch(
      error => dispatch(showAlert(error))
    );
};

const updateCustomer = (customer, customerId, dispatch) => {
  return CustomerApi.updateCustomer(customer, customerId)
    .then(response => dispatch(updateCustomerSuccess(response.customer)))
    .catch(
      error => dispatch(showAlert(error))
    );
};

export const saveCustomer = (customer) =>
  (dispatch) =>
    customer.id ?
      updateCustomer(customer, customer.id, dispatch):
      createCustomer(customer, dispatch);


