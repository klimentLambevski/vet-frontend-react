import { reduxForm } from 'redux-form';

const withFormHandler = (WrappedForm, formName) => {

  const WrappedFormRedux = reduxForm({
    form: formName,
    enableReinitialize: true
  })(WrappedForm);

  class WithFormHandler extends React.Component {
    constructor(props) {
      super(props);
      console.log(this.props);

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

    onSubmit(item) {
      this.props.saveItem(item);
    }

    render() {
      return (
        <WrappedFormRedux
          initialValues={this.state.formItem}
          onSubmit={this.onSubmit}
        />
      );
    }
  }

  const getDisplayName = (WrappedComponent) => WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithFormHandler.displayName = `WithFormHandler(${getDisplayName(WrappedForm)})`;

  return WithFormHandler;
};

export { withFormHandler };
