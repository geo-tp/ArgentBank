import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserUpdate } from "../api/user";
import { getUser } from "../store/selectors/user";
import PropTypes from "prop-types";

export const UserModal = ({ setModalIsOpen }) => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUserUpdate(firstName, lastName));
    setModalIsOpen(false);
  };

  return (
    <div className="user-modal">
      <div className="user-modal-content">
        <div
          onClick={() => setModalIsOpen(false)}
          className="user-modal-content-close"
        >
          <i className="fa fa-close"></i>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="profile-firstname">Firstname</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              id="profile-firstname"
              name="profile-firstname"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="profile-lastname">Lastname</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              id="profile-lastname"
              name="profile-lastname"
              required
            />
          </div>
          <button className="sign-in-button" type="submit">
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  );
};

UserModal.propsType = {
  setModalIsOpen: PropTypes.func.isRequired,
};
