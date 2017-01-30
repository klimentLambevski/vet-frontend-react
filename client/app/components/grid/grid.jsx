export class Grid extends React.Component {
  render() {
    return (
      <div className="grid component">
        <table className="ui table">
          {this._renderThead()}
          <tbody>
          {this._renderTbody()}
          </tbody>
        </table>
      </div>
    )
  }

  _renderThead() {
    let cols = this.props.columns || _.keys(this.props.rows[0]);

    return (
      <thead>
      <tr>{
        cols.map((col) => <th>{col}</th>)
      }</tr>
      </thead>
    )
  }

  _renderTbody() {
    let rows = this.props.rows;

    return rows.map((row) => (
      <tr>{
        _.map(row, (prop) => (
          <td>{prop}</td>
        ))
      }</tr>
    ));
  }

  _renderDetailsRow() {
    return <td colSpan={this.props.rows}></td>
  }
}
