import {push} from "react-router-redux";
import {connect} from "react-redux";
import {Grid} from "../components/grid/grid";
import {savePatientType} from "../components/dashboard/patients/patient-type/patient-type.actions";
import {PatientTypeFormContainer} from "../components/dashboard/patients/patient-type/patient-type-form.container";
import {Link} from "react-router";
import {RaisedButton} from "material-ui";
class PatientTypeDetailsView extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }

  render() {

    const {
      savePatientType,
      patientType
    } = this.props;
    console.log(this.props.patientType);
    return (
      <section className="patient-details">
        <div className="patient-details-forms">
          <div className="patient-form">
            <PatientTypeFormContainer
              patientType={patientType}
              savePatientType={savePatientType}
            />
            <Link to={`sdf`}>
              <RaisedButton
                type="button"
                label="New examination"
                fullWidth={true}
                primary={true}
              />
            </Link>
          </div>
        </div>
        <Grid
          rows={patientType.immunizations}
          columns={{
            name: {
              label: 'Име на вакцина'
            },
            description: {
              label: 'Опис на вакцина'
            }
          }}
          id="examinationsGrid"
          _onRowClick={this.onRowClicked}
        />
      </section>
    )
  }
}

const getById = (items, id) => {
  const item = items.filter(item => item.id === id);
  return item.length > 0 ? item[0] : {};
};

const mapStateToProps = (state, ownProps) => ({
  patientType: getById(state.patientTypes, ownProps.params.patientTypeId)
});

PatientTypeDetailsView = connect(mapStateToProps, {
  push,
  savePatientType
})(PatientTypeDetailsView);

export {PatientTypeDetailsView}
