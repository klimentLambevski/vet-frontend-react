import {connect} from 'react-redux';
import {Pagination} from './pagination';
import {changePage, changeRows} from '../../store/grid/grid.actions';

function mapStateToProps(store) {
  return {
    grid: store.common.grid,
  }
}
const mapDispatchToProps = {
  changePage,
  changeRows
};

export const Grid = connect(mapStateToProps, mapDispatchToProps)(class Grid extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    rows: React.PropTypes.array,
  };
  static defaultProps = {
    id: Date.now(),
    rows: [],
    pagination: {
      itemsPerPage: 3
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
    // console.log('componentWillReceiveProps', nextProps.grid);
    if (this.props.rows !== nextProps.rows) {
      setTimeout(() => {
        this.changeRows(nextProps.rows);
        this.changePage(0);
      })
    }

    if (nextProps.grid[nextProps.id]) {
      this.setState({
        rowsOnPage: nextProps.grid[nextProps.id].rowsOnPage,
        currentPage: nextProps.grid[nextProps.id].currentPage,
      });
    } else console.warn('Grid ID is not defined in state');
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
          _onPageChange={(page) => this.changePage(page)}/>
      </div>
    )
  }


  // map actions (to prefix grid name)
  changePage(page) {
    let start = page * this.props.pagination.itemsPerPage;
    let end = (page + 1) * this.props.pagination.itemsPerPage;

    this.props.changePage(this.props.id, page, this.props.rows.slice(start, end));
  }

  changeRows(rows) {
    this.props.changeRows(this.props.id, rows);
  }
});


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
  // return <tbody/>;
  return (
    <tbody>{
      rowsOnPage.map((row) => (
        <tr>{
          _.map(row, (prop) => (
            <td>{ _.isObject(prop) ? JSON.stringify(prop) : prop}</td>
          ))
        }</tr>
      ))
    }</tbody>
  );
};
