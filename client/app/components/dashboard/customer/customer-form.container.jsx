import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import CustomerForm from './customer-form';
import { saveCustomer } from './customer.actions';

const PatientFormRedux = reduxForm({
  form: 'customer'
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
    const user = this.props.customer.user;
    console.log(this.props, nextProps)
    if (user && user.id !== nextProps.customer.user.id) {
      this.setState({customer: nextProps.customer})
    }
  }

  onSubmit(customer) {
    this.props.actions.saveCustomer(customer);
  }

  render() {

    return (
      <section>
        <h1>Customer Form</h1>
        <PatientFormRedux
          onSubmit={this.onSubmit}
          initialValues={this.state.customer}
        />
      </section>
    );
  }
}

const getCustomerById = (customers, id) => {
  console.log(customers, id);
  const customer = customers.filter(customer => customer.user.id === id);
  return customer.length > 0 ? customer[0].user : {};
};

const mapStateToProps = (state, ownProps) => ({
  customer: getCustomerById(state.customers, ownProps.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ saveCustomer }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerFormContainer);
