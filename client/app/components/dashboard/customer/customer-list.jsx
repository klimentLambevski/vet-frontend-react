import { connect } from 'react-redux';
import { Link } from 'react-router';
import { CustomerFormContainer } from './customer-form.container';

let CustomerList = ({ customers }) => (
  <section>
    <h1>Customers List</h1>

    <div>
      <Link to={'/dashboard/customers/new'}>
        {'Add new customer'}
      </Link>

    </div>

    <ul>
      {
        customers.map(customer =>
          <li key={customer.user.id}>
            <Link to={'/dashboard/customers/' + customer.user.id}>
              {customer.user.name}
            </Link>
          </li>
        )
      }
    </ul>


    <CustomerFormContainer />
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
