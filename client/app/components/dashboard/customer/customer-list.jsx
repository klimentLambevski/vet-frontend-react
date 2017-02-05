import { connect } from 'react-redux';
import { Link } from 'react-router';
import { CustomerFormContainer } from './customer-form.container';

let CustomerList = ({ customers }) => (
  <section className="customers-list">
    <div className="customer-list">
      <div>
        <Link to={'/customers/new'}>
          {'Add new customer'}
        </Link>

      </div>

      <ul>
        {
          customers.map(customer =>
            <li key={customer.id}>
              <Link to={'/customers/' + customer.id}>
                {customer.user.name}
              </Link>
            </li>
          )
        }
      </ul>
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
