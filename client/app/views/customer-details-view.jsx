import { CustomerFormContainer } from '../components/dashboard/customer/customer-form.container';
import { PatientFormContainer } from '../components/dashboard/patients/patient-form.container';
import { PatientList } from '../components/dashboard/patients/patient-list';
import { connect } from 'react-redux';

let CustomerDetailsView = ({customer}) => {

  return (
    <section className="customer-details-view">
      <div className="customer-details-forms">
        <div className="edit-customer">
          <CustomerFormContainer customer={customer} />
        </div>
        <div className="add-patient">
          <PatientFormContainer patient={{customerId: customer.id}}/>
        </div>
      </div>
      <div>
         <PatientList />
      </div>
    </section>
  );

};

const getCustomerById = (customers, id) => {
  const customer = customers.filter(customer => customer.id === id);
  return customer.length > 0 ? customer[0] : {};
};

const mapStateToProps = (state, ownProps) => ({
  customer: getCustomerById(state.customers, ownProps.params.id)
});

CustomerDetailsView = connect(mapStateToProps)(CustomerDetailsView);

export { CustomerDetailsView };
