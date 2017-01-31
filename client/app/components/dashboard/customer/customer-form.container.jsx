import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CustomerForm from './customer-form';

class CustomerFormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(customer) {
    console.log(customer);
    // this.props.actions.authenticateUser(user, this.props.redirectTo || '/');
  }

  render() {
    return (
      <section>
        <h1>Customer Form</h1>
        <CustomerForm
          onSubmit={this.onSubmit}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerFormContainer);
