import { useDispatch } from "react-redux";
import { getDisconnected } from "../store/actions/auth";
import PropTypes from "prop-types";

export const UserButtons = ({ setModalIsOpen }) => {
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(getDisconnected());
  };
  return (
    <div className="user-buttons">
      <button class="signout-button" onClick={() => handleSignout()}>
        Disconnect
      </button>
      <button class="edit-button" onClick={() => setModalIsOpen(true)}>
        Edit Name
      </button>
    </div>
  );
};

UserButtons.propsType = {
  setModalIsOpen: PropTypes.func.isRequired,
};
