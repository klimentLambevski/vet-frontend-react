import {push} from "react-router-redux";
import {connect} from "react-redux";
import {Grid} from "../components/grid/grid";
import {savePatientType, getPatientTypes} from "../components/dashboard/patients/patient-type/patient-type.actions";
import {PatientTypeFormContainer} from "../components/dashboard/patients/patient-type/patient-type-form.container";
import {Link} from "react-router";
import {RaisedButton} from "material-ui";
import {saveImmunization} from "../components/dashboard/immunization/immunizations.actions";
import {ImmunizationFormContainer} from "../components/dashboard/immunization/immunization-form.container";
class PatientTypeDetailsView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    const {
      savePatientType,
      patientType,
      immunization,
      saveImmunization,
      push
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
            <Link to={`/patient-types/${patientType.id}/`}>
              <RaisedButton
                type="button"
                label="Додади нова иммунизација"
                fullWidth={true}
                primary={true}
              />
            </Link>
          </div>
          <ImmunizationFormContainer
            className="examination-form"
            immunization={{...immunization, patientTypeId: patientType.id }}
            saveImmunization={saveImmunization}
          />

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
          _onRowClick={(immunizationClicked) => {
            console.log(immunizationClicked);
            push(`/patient-types/${patientType.id}/${immunizationClicked.id}`)
          }}
        />
      </section>
    )
  }
}

const getById = (items, id) => {
  const item = items.filter(item => item.id === id);
  return item.length > 0 ? item[0] : {};
};


const mapStateToProps = (state, ownProps) => {

  let patientType = getById(state.patientTypes, ownProps.params.patientTypeId);

  return {
    patientType: patientType,
    patientTypes: state.patientTypes,
    immunization: getById(patientType.immunizations, ownProps.params.immunizationId)
  }
};

PatientTypeDetailsView = connect(mapStateToProps, {
  push,
  savePatientType,
  saveImmunization
})(PatientTypeDetailsView);

export {PatientTypeDetailsView}
