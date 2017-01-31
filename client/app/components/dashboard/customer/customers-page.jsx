import CustomerFormContainer from './customer-form.container';

class CustomersPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <h1>Customer</h1>
        <CustomerFormContainer />
      </section>
    );
  }
}

export default CustomersPage;
