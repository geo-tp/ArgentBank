import PropTypes from "prop-types";

export const UserButtons = ({ setModalIsOpen }) => {
  return (
    <div className="user-buttons">
      <button className="edit-button" onClick={() => setModalIsOpen(true)}>
        Edit Name
      </button>
    </div>
  );
};

UserButtons.propsType = {
  setModalIsOpen: PropTypes.func.isRequired,
};
