import {Grid} from "../components/grid/grid";

export class PatientsContainer extends React.Component {
  render = () => (
    <div className="patients view container">
      <Grid rows={
        [{
          name: 'a',
          value: '11'
        }, {
          name: 'b',
          value: '12'
        }, {
          name: 'c',
          value: '13'
        }]
      }/>
    </div>
  );
}
