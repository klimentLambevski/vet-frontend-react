import { connect } from 'react-redux';
import { CustomerFormContainer } from './customer-form.container';
import { Grid } from '../../grid/grid';
import { push } from 'react-router-redux';

let CustomerList = ({ customers, push }) => (
  <section className="customers-list">
    <div className="customer-list">
      <Grid
        id="customersGrid"
        rows={customers}
        _onRowClick={
          (customer) =>
            push(`/customers/${customer.id}`)
        }
      />
    </div>

    <div className="customer-form">
      <CustomerFormContainer />
    </div>
  </section>
);

CustomerList.propTypes = {
  customers: React.PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  customers: state.customers
});

CustomerList = connect(mapStateToProps, {push})(CustomerList);

export { CustomerList };
