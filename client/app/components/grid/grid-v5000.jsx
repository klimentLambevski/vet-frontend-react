import {TBody, THead} from './grid-bricks';


export class GridV5000 extends React.Component {
  render() {
    return (
      <div className="grid component">
        <table className="ui table">
          <THead {...this.props} searchChanged={(filter, value) => {
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
}

