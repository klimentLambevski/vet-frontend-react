const PropTypes = React.PropTypes;

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.timeoutId = null;
  }

  componentDidMount() {
    this.timeoutId = setTimeout(
      () => {
        this.props.onRemove(this.props.alertId)
      },
      2000
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    return (
      <div>
        <div>{this.props.message}</div>
      </div>
    );
  }
}

Alert.propTypes = {
  onRemove: PropTypes.func.isRequired
};

export default Alert;
