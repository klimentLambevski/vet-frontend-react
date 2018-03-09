import { connect } from 'react-redux';
import { CustomerFormContainer } from './customer-form.container';
import { Grid } from '../../grid/grid';
import { push } from 'react-router-redux';
import { saveCustomer } from './customer.actions';
import * as _ from "lodash";

let CustomerList = ({ customers, push, saveCustomer }) => (
  <section className="customers-list">
    {console.log(customers)}
    <div className="customer-list">
      <Grid
        id="customersGrid"
        rows={customers.map(customer => {
          let cus = _.clone(customer);
          cus.user.referral = `http://m.me/vetspiritohrid?ref=${cus.user.referral}`;
          return cus;
        })}
        columns={{
          'user.name': {
            label: 'Име'
          },
          'user.surname': {
            label: 'Презиме'
          },
          'user.email': {
            label: 'Email'
          },
          'user.referral': {
            label: 'Месенџер линк',
            type: 'copy'
          }
        }}
        _onRowClick={
          (customer) =>
            push(`/customers/${customer.id}`)
        }
        _onRowDelete={(row) => {
          console.log(row);
        }}
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
