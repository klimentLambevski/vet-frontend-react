export class Grid extends React.Component {
  render() {
    return (
      <div className="grid component">
        <table className="ui table">
          {this.renderThead()}
          <tbody>
          {this.renderTbody()}
          </tbody>
        </table>
      </div>
    )
  }

  renderThead() {
    let cols = this.props.columns || [1, 2, 3];

    return (
      <thead>
      <tr>{
        cols.map((col) => <th>{col}</th>)
      }</tr>
      </thead>
    )
  }

  renderTbody() {
    let rows = this.props.rows || [{
        name: 'a'
      }, {
        name: 'b'
      }, {
        name: 'c'
      }];

    return rows.map((row) => (
      <tr>{
        _.map(row, (prop) => (
          <td>{prop}</td>
        ))
      }</tr>
    ));

  }
}
