import {Grid} from "../components/grid/grid";

export class PatientsContainer extends React.Component {
  render = () => (
    <div className="patients view container">
      <Grid columns={[1, 2, 3, 4]}/>
    </div>
  );
}
