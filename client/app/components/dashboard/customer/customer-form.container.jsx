import {connect} from 'react-redux';
import {CustomerForm} from './customer-form';
import {saveCustomer} from './customer.actions';
import {withFormHandler} from '../../../hocs/with-form-handler';

const CustomerFromRedux = withFormHandler(CustomerForm, 'customer');

let CustomerFormContainer = ({customer, saveCustomer}) => (
  <section>
    {customer && customer.id ? <h4>Измени корисник</h4>: <h4>Додади нов корисник</h4>}

    <CustomerFromRedux
      initialValues={customer}
      formItem={customer}
      saveItem={saveCustomer}
    />
  </section>
);

const mapStateToProps = (state, ownProps) => ({});

CustomerFormContainer = connect(mapStateToProps, {saveCustomer})(CustomerFormContainer);

export {CustomerFormContainer};
