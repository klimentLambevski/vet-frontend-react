import {Pagination} from "./pagination";
export class Grid extends React.Component {
  render() {
    return (
      <div className="grid component">
        <table className="ui table">
          <THead {...this.props}/>
          <TBody {...this.props}/>
        </table>
        <Pagination total={this.props.rows.length} _onPageChange={this.pageChanged}/>
      </div>
    )
  }

  pageChanged(page) {

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

let TBody = ({rows}) => {
  return (
    <tbody>{
      rows.map((row) => (
        <tr>{
          _.map(row, (prop) => (
            <td>{prop}</td>
          ))
        }</tr>
      ))
    }</tbody>
  );
}
