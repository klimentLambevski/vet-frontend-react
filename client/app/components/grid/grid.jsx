import {TBody, THead} from './grid-bricks';
import {Pagination} from "./pagination";

export class Grid extends React.Component {
  static propTypes = {
    rows: React.PropTypes.array,
    columns: React.PropTypes.object,
    pagination: React.PropTypes.object,
    _onRowClick: React.PropTypes.func,
  };
  static defaultProps = {
    rows: [],
    pagination: {
      itemsPerPage: 10
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      rowsOnPage: [],
      rowsFiltered: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      rowsFiltered: nextProps.rows,
    }, this.changeRowsOnPage);
  }

  render() {
    return <div className="grid component">
      <table className="ui table">
        <THead
          {...this.props}
          searchChanged={(filter, value) => this.changeFilters(filter, value)}
        />
        <TBody
          {...this.props}
          rows={this.state.rowsOnPage}
        />
      </table>
      <Pagination
        total={this.state.rowsFiltered.length}
        currentPage={this.state.currentPage}
        perPage={this.props.pagination.itemsPerPage}
        _onPageChange={(page) => this.changePage(page)}/>
    </div>
  }

  changeFilters(filter, value) {
    let filters = {
      [filter]: value
    };
    this.setState({
      filters,
      rowsFiltered: filterRows(this.props.rows, filters)
    });
    this.changePage(0);
  }

  changePage(page) {
    this.setState({
      currentPage: page,
    }, this.changeRowsOnPage);
  }

  changeRowsOnPage() {
    this.setState({
      rowsOnPage: getPageRows(
        this.state.rowsFiltered,
        this.state.currentPage,
        this.props.pagination.itemsPerPage
      )
    })
  }

}

function filterRows(rows, filters) {
  if (filters) {
    return _.filter(rows,
      (row) => _.every(filters,
        (value, filter) => {
          let item = _.get(row, filter);
          return _.includes(item, value)
        })
    );
  } else return rows;
}

function getPageRows(rows, page, itemsPerPage) {
  let start = page * itemsPerPage;
  let end = (page + 1) * itemsPerPage;

  return rows.slice(start, end);
}

