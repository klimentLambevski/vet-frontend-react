import {Pagination} from "./pagination";
export class Grid extends React.Component {
  static defaultProps = {
    test: 'a',
    pagination: {
      itemsPerPage: 10
    }
  };

  constructor() {
    super();

    this.state = {
      rowsOnPage: []
    }
  }

  render() {
    return (
      <div className="grid component">
        <table className="ui table">
          <THead {...this.props}/>
          <TBody {...this.state}/>
        </table>
        <Pagination total={this.props.rows.length} _onPageChange={(page) => this.pageChanged(page)}/>
      </div>
    )
  }

  pageChanged(page) {
    let start = page * this.props.pagination.itemsPerPage;
    let end = (page + 1) * this.props.pagination.itemsPerPage;
    this.setState({
      rowsOnPage: this.props.rows.slice(start, end)
    })
  }
}

let THead = ({columns, rows}) => {
  let cols = columns || _.keys(rows[0]);

  return (
    <thead>
    <tr>{
      cols.map((col) => <th>{col}</th>)
    }</tr>
    <tr>{
      cols.map((col) => <th className="row-search"><input/></th>)
    }</tr>
    </thead>
  )
};

let TBody = ({rowsOnPage}) => {
  return (
    <tbody>{
      rowsOnPage.map((row) => (
        <tr>{
          _.map(row, (prop) => (
            <td>{prop}</td>
          ))
        }</tr>
      ))
    }</tbody>
  );
}
