import { CustomerFormContainer } from '../components/dashboard/customer/customer-form.container';
import { PatientFormContainer } from '../components/dashboard/patients/patient-form.container';
import { connect } from 'react-redux';
import { getPatients, savePatient } from '../components/dashboard/patients/patient.actions';
import { Grid } from '../components/grid/grid';
import { push } from 'react-router-redux';
import { saveCustomer } from '../components/dashboard/customer/customer.actions';

class CustomerDetailsView extends React.Component {
  constructor(props) {
    super(props);

    this.onRowClicked = this.onRowClicked.bind(this);
  }

  componentDidMount() {
    if (this.props.params.id) {
      this.props.getPatients(this.props.params.id);
    }
  }

  onRowClicked(patient) {
    this.props.push(`/patients/${patient.id}/`);
  }

  render() {
    const {
      customer,
      saveCustomer,
      patientTypes,
      savePatient,
      patients
    } = this.props;

    return (
      <section className="customer-details-view">
        <div className="customer-details-forms">
          <div className="edit-customer">
            <CustomerFormContainer
              customer={customer}
              saveCustomer={saveCustomer}
            />
          </div>

          <div className="add-patient">
            <PatientFormContainer
              patient={{ customerId: customer.id }}
              patientTypes={patientTypes}
              savePatient={savePatient}
            />
          </div>
        </div>

        <div className="patients-list">
          <Grid
            rows={patients}
            columns={{
              name: {
                label: 'Name'
              },
              'type.name': {
                label: 'Type'
              },
              birthDate: {
                label: 'Birth date'
              },
              microchip: {
                label: 'Microchip'
              },
              race: {
                label: 'Race'
              },
              mbr: {
                label: 'MBR'
              }
            }}
            id="patientsGrid"
            _onRowClick={this.onRowClicked}
          />
        </div>
      </section>
    );
  }
}

const selectCustomerById = (customers, id) => {
  const customer = customers.filter(customer => customer.id === id);
  return customer.length > 0 ? customer[0] : {};
};

const mapStateToProps = (state, ownProps) => ({
  customer: selectCustomerById(state.customers, ownProps.params.id),
  patients: state.patients,
  patientTypes: state.patientTypes
});

CustomerDetailsView = connect(mapStateToProps, {
  getPatients,
  push,
  savePatient,
  saveCustomer
})(CustomerDetailsView);

export { CustomerDetailsView };
