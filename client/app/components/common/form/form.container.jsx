import { reduxForm } from 'redux-form';

const PropTypes = React.PropTypes;

class FormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formItem: Object.assign({}, this.props.formItem)
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.formItem.id !== nextProps.formItem.id) {
      this.setState({ formItem: nextProps.formItem })
    }
  }

  getChildContext() {
    return {
      onSubmit: this.onSubmit,
      initialValues: this.state.formItem
    }
  }

  onSubmit(item) {
    this.props.saveItem(item);
  }

  render() {
    return (
      <section>
        {
          //TODO i think it is not ok to call hocs in render. move this in the constructor
          reduxForm({
            form: this.props.formName,
            enableReinitialize: true
          })(this.props.children[0])//TODO try to pass the component as component property
        }
      </section>
    );
  }
}

FormContainer.propTypes = {
  saveItem: PropTypes.func.isRequired,
  formItem: PropTypes.object.isRequired,
  formName: PropTypes.string.isRequired
};

FormContainer.childContextTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired
};

export { FormContainer };
