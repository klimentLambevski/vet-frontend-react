import {TextField} from 'material-ui';
import {selectElement} from "../../services/util/select";
import * as _ from "lodash";

let THead = ({columns, rows, searchChanged}) => {
  let cols = columns || _.keys(rows[0]);
  return (
    <thead>
    <tr>{
      _.map(cols, (col, key) => <th key={col.label}>{col.label || key}</th>)
    }</tr>
    <tr>{
      _.map(cols, (col, key) =>
        <th className="row-search" key={col.label}>
          <TextField style={{fontSize: '14px', width: 'auto'}} hintText="пребарај" onChange={(e) => searchChanged(key, e.target.value)}/>
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



  return (
    <tbody>{
      rows.map((row) => (
        <tr onClick={() => _onRowClick(row)} key={row.id}>{
          _.map(cols, (conf, name) => {
            let cell = _.get(row, name);
            return <td key={name}>
              {renderCell(cell, conf)}
            </td>;
          })
        }</tr>
      ))
    }</tbody>
  );
};

function copyToClipboard(proxy) {
  proxy.stopPropagation();
  let element = $(proxy.currentTarget);
  selectElement(element.siblings('.js-td-content')[0]);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}

function renderDate(date) {
  let d = _.isDate(date)? date: new Date(date);

  return `${('0' + d.getDate()).slice(-2)}-${('0' + (d.getMonth()+1)).slice(-2)}-${d.getFullYear()}`
}

function renderCell(cell, config) {
  switch(config.type) {
    case 'date':
      return (<span className={"js-td-content"}>{renderDate(cell)}</span>);
    case 'copy':
      return (
        <span>
          <span className={"js-td-content hidden"}>{_.isObject(cell) ? JSON.stringify(cell) : cell}</span>
          <div className="overlay-hover" onClick={copyToClipboard}>
                копирај
              </div>
        </span>
      );
    default:
      return (<span className={"js-td-content"}>{_.isObject(cell) ? JSON.stringify(cell) : cell}</span>);
  }
}

export {
  TBody,
  THead
}
