export class Pagination extends React.Component {
  static propTypes = {
    total: React.PropTypes.number.isRequired,
    perPage: React.PropTypes.number,
    currentPage: React.PropTypes.number.isRequired,
    _onPageChange: React.PropTypes.func
  };
  static defaultProps = {
    perPage: 10
  };

  changePage(page) {
    if (this.props.currentPage === page) return;
    this.props._onPageChange(page);
  }

  render() {
    let numPages = this.props.total / this.props.perPage;

    return numPages < 1 ? null : (
        <div className="pagination component">
          <div className="ui pagination menu">
            {_.range(numPages).map((page) => (
              <a className={`item ${this.props.currentPage === page ? 'active' : ''}`}
                 onClick={() => this.changePage(page)}>
                {page + 1}
              </a>
            ))}
          </div>
        </div>
      );
  }
}
