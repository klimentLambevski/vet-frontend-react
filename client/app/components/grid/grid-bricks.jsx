import {TextField} from 'material-ui';
import {selectElement} from "../../services/util/select";

let THead = ({columns, rows, searchChanged}) => {
  let cols = columns || _.keys(rows[0]);
  return (
    <thead>
    <tr>{
      _.map(cols, (col, key) => <th>{col.label || key}</th>)
    }</tr>
    <tr>{
      _.map(cols, (col, key) =>
        <th className="row-search"><TextField hintText="пребарај" onChange={(e) => searchChanged(key, e.target.value)}/>
        </th>
      )
    }</tr>
    </thead>
  )
};

let TBody = ({columns, rows, _onRowClick}) => {
  let cols = columns; // || _.keys(rows[0]); enable columns based on rows object keys

  // let clipboard = new Clipboard('.overlay-hover', {
  //   text: (trigger) => {
  //     return '123';
  //   }
  // });
  // console.log('copyToClipboard',  ClipboardAction);


  setTimeout(() => {
    document.execCommand('copy');
  }, 1000);

  function copyToClipboard(proxy) {
    proxy.stopPropagation();
    let element = $(proxy.currentTarget);
    selectElement(element.siblings('.js-td-content')[0]);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }

  return (
    <tbody>{
      rows.map((row) => (
        <tr onClick={() => _onRowClick(row)}>{
          _.map(cols, (conf, name) => {
            let cell = _.get(row, name);
            return <td>
              <span className="js-td-content">{_.isObject(cell) ? JSON.stringify(cell) : cell}</span>
              {conf.enableCopy ? <div className="overlay-hover" onClick={copyToClipboard}>
                копирај
              </div> : null}
            </td>;
          })
        }</tr>
      ))
    }</tbody>
  );
};

export {
  TBody,
  THead
}
