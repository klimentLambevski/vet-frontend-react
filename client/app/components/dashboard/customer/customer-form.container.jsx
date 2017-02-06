import { CustomerForm } from './customer-form';
import { saveCustomer } from './customer.actions';
import { withFormHandler } from '../../../hocs/with-form-handler';

const CustomerFromRedux = withFormHandler(CustomerForm, 'customer');

const CustomerFormContainer = ({ customer = {}, saveCustomer }) => (
  <section>
    {
      customer && customer.id ?
        <h4>Edit customer</h4>
        :
        <h4>Add new customer</h4>
    }
    <CustomerFromRedux
      initialValues={customer}
      formItem={customer}
      saveItem={saveCustomer}
    />
  </section>
);

export { CustomerFormContainer };
