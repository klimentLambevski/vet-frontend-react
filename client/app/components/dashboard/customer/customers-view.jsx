import { connect } from 'react-redux';
import { getCustomers } from './customer.actions';

class CustomersView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getCustomers());
  }

  render() {
    return (
      <section>
        <h1>Customers</h1>

        {this.props.children}
      </section>
    );
  }
}

CustomersView = connect()(CustomersView);

export { CustomersView };
