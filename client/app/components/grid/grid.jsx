import {Pagination} from "./pagination";
export class Grid extends React.Component {
  static defaultProps = {
    test: 'a',
    pagination: {
      itemsPerPage: 10
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      rowsOnPage: []
    };
  }

  componentWillReceiveProps(nextProps) {
    // todo: important - experimental timeout (so we have the nextProps in this.props)
    setTimeout(() => {
      this.pageChanged(0);
    })
  }


  render() {
    return (
      <div className="grid component">
        <table className="ui table">
          <THead {...this.props} onChange={(e) => console.log('input changed', e)}/>
          <TBody {...this.state}/>
        </table>
        <Pagination
          total={this.props.rows.length}
          currentPage={this.state.currentPage}
          _onPageChange={(page) => this.pageChanged(page)}/>
      </div>
    )
  }

  pageChanged(page) {
    let start = page * this.props.pagination.itemsPerPage;
    let end = (page + 1) * this.props.pagination.itemsPerPage;
    this.setState({
      currentPage: page,
      rowsOnPage: this.props.rows.slice(start, end)
    })
  }
}

let THead = ({columns, rows, onChange}) => {
  let cols = columns || _.keys(rows[0]);

  return (
    <thead>
    <tr>{
      cols.map((col) => <th>{col}</th>)
    }</tr>
    <tr>{
      cols.map((col) => <th className="row-search"><input onChange={(e) => onChange(e.target.value)}/></th>)
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
