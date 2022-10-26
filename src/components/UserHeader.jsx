import PropTypes from "prop-types";

export const UserHeader = ({ firstName, lastName }) => {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}
      </h1>
    </div>
  );
};

UserHeader.propsType = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};
