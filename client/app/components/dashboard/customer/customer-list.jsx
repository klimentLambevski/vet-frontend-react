import { Link } from 'react-router';

class CustomerList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h1>Customers List</h1>

        <ul>
          {
            this.props.customers.map(customer =>
              <li key={customer.user.id}>
                <Link to={'/dashboard/customers/' + customer.user.id}>
                  {customer.user.name}
                </Link>
              </li>
            )
          }
        </ul>
      </section>
    );
  }
}

export default CustomerList;
