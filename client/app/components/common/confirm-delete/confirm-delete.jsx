import {Dialog, FlatButton} from "material-ui";



export class ConfirmDelete extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    }
  }

  handleClose(result) {
    if(result) {
      this.props.onDelete && this.props.onDelete(this.props.resource);
    }

    this.setState({
      modalOpen: false
    })
  }

  openModal = (e) => {

    e.stopPropagation();
    this.setState({
      modalOpen: true
    })
  };

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this.handleClose(false)}
      />,
      <FlatButton
        label="Confirm"
        primary={true}
        keyboardFocused={true}
        onTouchTap={() => this.handleClose(true)}
      />,
    ];

    return (
      <div>
        <FlatButton secondary={true} label={'Избриши'} onClick={this.openModal}/>
        <Dialog
          title={'Потврди'}
          actions={actions}
          modal={false}
          open={this.state.modalOpen}
          onRequestClose={() => this.handleClose(false)}
        >
          Дали сте сигурни дека сакате да избришите?
        </Dialog>
      </div>
    )
  }

}
