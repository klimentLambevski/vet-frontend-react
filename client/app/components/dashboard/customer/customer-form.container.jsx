import { connect } from 'react-redux';
import { CustomerForm } from './customer-form';
import { saveCustomer } from './customer.actions';
import { withFormHandler } from '../../../hocs/with-form-handler';

const CustomerFromRedux = withFormHandler(CustomerForm, 'customer');

let CustomerFormContainer = ({ customer, saveCustomer }) => (
  <section>
    <h1>Customer Form</h1>

    <CustomerFromRedux
      initialValues={customer}
      formItem={customer}
      saveItem={saveCustomer}
    />
  </section>
);

const getCustomerById = (customers, id) => {
  const customer = customers.filter(customer => customer.user.id === id);
  return customer.length > 0 ? customer[0].user : {};
};

const mapStateToProps = (state, ownProps) => ({
  customer: getCustomerById(state.customers, ownProps.params.id)
});

CustomerFormContainer = connect(mapStateToProps, { saveCustomer })(CustomerFormContainer);

export { CustomerFormContainer };
