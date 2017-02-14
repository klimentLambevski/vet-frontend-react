export {
  TBody,
  THead
}

let THead = ({columns, rows, searchChanged}) => {
  let cols = columns || _.keys(rows[0]);

  return (
    <thead>
    <tr>{
      _.map(cols, (col, key) => <th>{col.label || key}</th>)
    }</tr>
    <tr>{
      _.map(cols, (col, key) =>
        <th className="row-search"><input onChange={(e) => searchChanged(key, e.target.value)}/></th>
      )
    }</tr>
    </thead>
  )
};

let TBody = ({columns, rowsOnPage, _onRowClick}) => {
  // return <tbody/>;
  let cols = columns || rowsOnPage[0];

  return (
    <tbody>{
      rowsOnPage.map((row) => (
        <tr onClick={() => _onRowClick(row)}>{
          _.map(cols, (conf, name) => {
            let cell = _.get(row, name);
            return <td>{_.isObject(cell) ? JSON.stringify(cell) : cell}</td>;
          })
        }</tr>
      ))
    }</tbody>
  );
};
