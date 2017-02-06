import { connect } from 'react-redux';
import { CustomerFormContainer } from './customer-form.container';
import { Grid } from '../../grid/grid';
import { push } from 'react-router-redux';
import { saveCustomer } from './customer.actions';

let CustomerList = ({ customers, push, saveCustomer }) => (
  <section className="customers-list">
    <div className="customer-list">
      <Grid
        id="customersGrid"
        rows={customers}
        columns={{
          'user.name': {
            label: 'Name'
          },
          'user.surname': {
            label: 'Surname'
          },
          'user.email': {
            label: 'Email'
          }
        }}
        _onRowClick={
          (customer) =>
            push(`/customers/${customer.id}`)
        }
      />
    </div>

    <div className="customer-form">
      <CustomerFormContainer
        saveCustomer={saveCustomer}
      />
    </div>
  </section>
);

CustomerList.propTypes = {
  customers: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  customers: state.customers
});

CustomerList = connect(mapStateToProps, { push, saveCustomer })(CustomerList);

export { CustomerList };
