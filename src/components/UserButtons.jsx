import { useDispatch } from "react-redux";
import { getDisconnected } from "../store/actions/auth";
import PropTypes from "prop-types";

export const UserButtons = ({ setModalIsOpen }) => {
  const dispatch = useDispatch();

  return (
    <div className="user-buttons">
      <button class="edit-button" onClick={() => setModalIsOpen(true)}>
        Edit Name
      </button>
    </div>
  );
};

UserButtons.propsType = {
  setModalIsOpen: PropTypes.func.isRequired,
};
