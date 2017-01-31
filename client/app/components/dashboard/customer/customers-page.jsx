import CustomerList from './customer-list';

class CustomersPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h1>Customers</h1>

        <CustomerList />
      </section>
    );
  }
}

export default CustomersPage;
