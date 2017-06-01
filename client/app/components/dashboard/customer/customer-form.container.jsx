import { CustomerForm } from './customer-form';
import { withFormHandler } from '../../../hocs/with-form-handler';
const validate = (values) => {
  const errors = {user: {}};

  ['name', 'surname']
    .forEach(key => {
      if (values.user && (!values.user[key] || values.user[key] === '')) {
        errors.user[key] = 'Задожително поле';
      }
    });

  return errors;
};
const CustomerFromRedux = withFormHandler(CustomerForm, 'customer', validate);

const CustomerFormContainer = ({ customer = {}, saveCustomer }) => (
  <section>
    {
      customer && customer.id ?
        <h4>Измени корисник</h4>
        :
        <h4>Додади нов корисник</h4>
    }

    <CustomerFromRedux
      initialValues={customer}
      formItem={customer}
      saveItem={saveCustomer}
    />
  </section>
);

export { CustomerFormContainer };
