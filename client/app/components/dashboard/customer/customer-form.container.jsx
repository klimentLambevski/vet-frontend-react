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

const mapStateToProps = (state, ownProps) => ({});

CustomerFormContainer = connect(mapStateToProps, { saveCustomer })(CustomerFormContainer);

export { CustomerFormContainer };
