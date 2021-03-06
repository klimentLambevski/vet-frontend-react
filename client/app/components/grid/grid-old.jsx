import {connect} from 'react-redux';
import {Pagination} from './pagination';
import {changePage, changeRows, changeFilters} from '../../store/grid/grid.actions';

function mapStateToProps(store) {
  return {
    grid: store.common.grid,
  }
}
const mapDispatchToProps = {
  changePage,
  changeRows,
  changeFilters,
};

export const GridOld = connect(mapStateToProps, mapDispatchToProps)(class Grid extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    rows: React.PropTypes.array,
    columns: React.PropTypes.object,
    _onRowClick: React.PropTypes.func,
  };
  static defaultProps = {
    id: Date.now(),
    rows: [],
    pagination: {
      itemsPerPage: 10
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      filters: {},
      currentPage: 0,
      rowsOnPage: []
    };
  }

  componentWillReceiveProps(nextProps) {
    let nextState;
    if (nextProps.grid[nextProps.id]) nextState = {
      filters: nextProps.grid[nextProps.id].filters,
      rowsOnPage: nextProps.grid[nextProps.id].rowsOnPage,
      currentPage: nextProps.grid[nextProps.id].currentPage,
    }; else nextState = {};

    // console.log('componentWillReceiveProps', nextProps.grid);
    if (this.props.rows !== nextProps.rows) {
      setTimeout(() => {
        this.changePage(0);
        this.changeRows(nextProps.rows);
      })
    } else if (this.state.filters !== nextState.filters) {
      setTimeout(() => {
        this.changePage(0);
      });
    }

    if (nextProps.grid[nextProps.id]) {
      this.setState(nextState);
    } else console.warn('Grid ID is not defined in state');
  }

  render() {
    return (
      <div className="grid component">
        <table className="ui table">
          <THead {...this.props} searchChanged={(filter, value) => {
            console.log('input changed', filter, value);
            this.changeFilters(filter, value);
          }}/>
          <TBody {...this.props}{...this.state}/>
        </table>
        <Pagination
          total={this.props.rows.length}
          currentPage={this.state.currentPage}
          perPage={this.props.pagination.itemsPerPage}
          _onPageChange={(page) => this.changePage(page)}/>
      </div>
    )
  }


  // map actions (to prefix grid name)
  changeFilters(filter, value) {
    let filters = {
      ...this.state.filters,
      [filter]: value
    };

    this.props.changeFilters(this.props.id, filters)
  }

  changePage(page) {
    // filter
    let rows = this.props.rows;
    if (this.state.filters) {
      rows = _.filter(rows,
        (row) => _.every(this.state.filters,
          (value, filter) => _.includes(row[filter], value))
      );
    }

    // paginate
    let start = page * this.props.pagination.itemsPerPage;
    let end = (page + 1) * this.props.pagination.itemsPerPage;

    this.props.changePage(this.props.id, page, rows.slice(start, end));
  }

  changeRows(rows) {
    this.props.changeRows(this.props.id, rows);
  }
});
