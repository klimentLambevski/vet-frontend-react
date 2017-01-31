import {Grid} from "../components/grid/grid";
import {gridData} from "../../mocks/grid-data";

export class PatientsContainer extends React.Component {
  render = () => (
    <div className="patients view container">
      <Grid rows={gridData}/>
    </div>
  );
}
