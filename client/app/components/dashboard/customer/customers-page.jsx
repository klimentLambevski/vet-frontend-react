import CustomerForm from './customer-form';

class CustomersPage extends React.Component {
  constructor(props) {
    console.log('customers');
    super(props);
  }

  render() {
    return (
      <section>
        <h1>Customer</h1>
        <CustomerForm />
      </section>
    );
  }
}

export default CustomersPage;
