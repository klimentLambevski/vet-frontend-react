import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

//TODO add isLoading bool to the auth store, if its true return false instead of inner component and dont check for auth...

export default (ComposedComponent) => {
  class RequireAuthentication extends React.Component {

    componentWillMount() {
      this.redirectIfNotAuthenticated();
    }

    componentWillUpdate() {
      this.redirectIfNotAuthenticated();
    }

    redirectIfNotAuthenticated() {
      const { currentUrl } = this.props;

      if (!this.props.isAuthenticated) {
        this.props.actions.push(`/login?next=${currentUrl}`);
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props}/>
      );
    }

  }

  const mapStateToProps = (state, ownProps) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      currentUrl: ownProps.location.pathname
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators({ push }, dispatch)
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(RequireAuthentication);
}
