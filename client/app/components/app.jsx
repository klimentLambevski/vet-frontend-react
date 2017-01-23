import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isAuthenticated } from '../actions/auth.thunks';
import Header from './common/heder';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.props.actions.isAuthenticated()
      .then(() => {
        console.log('finished');
        this.setState({isLoading: false})
      })
      .catch(() => {
        console.log('err');
      });
  }

  render() {
    console.log(this.state);
    if (this.state.isLoading) {
      return (
        <div>
          Loading
        </div>
      );
    }

    return (
      <section>
        <Header/>
        {this.props.children}
      </section>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ isAuthenticated }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
