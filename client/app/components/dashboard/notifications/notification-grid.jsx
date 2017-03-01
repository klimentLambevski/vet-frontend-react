import { Grid } from '../../grid/grid';

let NotificationGrid = ({ notifications }) => (
  <section>
    <div>
      <Grid
        id="notificationsGrid"
        rows={notifications}
        columns={{
          type: {
            label: 'Тип'
          },
          message: {
            label: 'Порака'
          }
        }}
        _onRowClick={() => {}}
      />
    </div>
  </section>
);

NotificationGrid.propTypes = {
  notifications: React.PropTypes.array.isRequired
};

export { NotificationGrid };
