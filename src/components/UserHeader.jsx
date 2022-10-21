import PropTypes from "prop-types";

export const UserHeader = ({ firstname, lastname }) => {
  return (
    <div class="header">
      <h1>
        Welcome back
        <br />
        {firstname} {lastname}
      </h1>
      <button class="edit-button">Edit Name</button>
    </div>
  );
};

UserHeader.propsType = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};
