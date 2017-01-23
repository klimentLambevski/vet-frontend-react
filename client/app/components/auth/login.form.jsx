const PropTypes = React.PropTypes;

const LoginForm = ({ user, onValueChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={onValueChange}/>

      <input
        type="password"
        name="password"
        value={user.password}
        onChange={onValueChange}
      />

      <input
        type="submit"
        value="Save"/>
    </form>
  );
};

LoginForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired
};

export default LoginForm;
