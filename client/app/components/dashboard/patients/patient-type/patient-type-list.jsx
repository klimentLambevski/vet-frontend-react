import { connect } from 'react-redux';
import {Grid} from "../../../grid/grid";
import {push} from "react-router-redux";
import {PatientTypeFormContainer} from "./patient-type-form.container";
import {savePatientType} from "./patient-type.actions";

let PatientTypeList = ({ patientTypes, push, savePatientType }) => (
  <section className="patient-types-list">
    <div className="patient-type-list">
      <Grid
        id="patientTypesGrid"
        rows={patientTypes}
        columns={{
          'name': {
            label: 'Тип на пациент'
          }
        }}
        _onRowClick={
          (patientType) =>
          {
            push(`/patient-types/${patientType.id}/`)
          }
        }
      />
    </div>
    <div className="patient-type-form">
      <PatientTypeFormContainer savePatientType={savePatientType}/>
    </div>
  </section>
);

PatientTypeList.propTypes = {
  patientTypes: React.PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  patientTypes: state.patientTypes
});

PatientTypeList = connect(mapStateToProps, {
  push,
  savePatientType
})(PatientTypeList);

export { PatientTypeList };
