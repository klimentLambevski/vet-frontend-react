import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { CustomerForm } from './customer-form';
import { saveCustomer } from './customer.actions';

const CustomerFormRedux = reduxForm({
  form: 'customer',
  enableReinitialize: true
})(CustomerForm);

class CustomerFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: Object.assign({}, this.props.customer)
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.customer.id !== nextProps.customer.id) {
      this.setState({ customer: nextProps.customer })
    }
  }

  onSubmit(customer) {
    this.props.saveCustomer(customer);
  }

  render() {
    return (
      <section>
        <h1>Customer Form</h1>
        <CustomerFormRedux
          onSubmit={this.onSubmit}
          initialValues={this.state.customer}
        />
      </section>
    );
  }
}

const getCustomerById = (customers, id) => {
  const customer = customers.filter(customer => customer.user.id === id);
  return customer.length > 0 ? customer[0].user : {};
};

const mapStateToProps = (state, ownProps) => ({
  customer: getCustomerById(state.customers, ownProps.params.id)
});

CustomerFormContainer = connect(mapStateToProps, { saveCustomer })(CustomerFormContainer);

export { CustomerFormContainer };
