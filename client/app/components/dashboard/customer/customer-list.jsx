import { connect } from 'react-redux';
import { Link } from 'react-router';
import { CustomerFormContainer } from './customer-form.container';
import { Grid } from '../../grid/grid';

let CustomerList = ({ customers }) => (
  <section className="customers-list">
    <div className="customer-list">
      <Grid id="customersGrid" rows={customers} />
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

CustomerList = connect(mapStateToProps)(CustomerList);

export { CustomerList };
