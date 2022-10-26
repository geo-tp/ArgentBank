import { Link } from "react-router-dom";
import ArgentBankLogo from "../img/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "../store/selectors/auth";
import { getUser } from "../store/selectors/user";
import { getDisconnected } from "../store/actions/auth";

export const Header = () => {
  const auth = useSelector(getAuth);
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const handleSignout = () => {
    dispatch(getDisconnected());
  };

  return (
    <header>
      <nav class="main-nav">
        <Link class="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={ArgentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div class="main-nav-links">
          <Link
            className="main-nav-item"
            to={auth.isConnected ? "user" : "signin"}
          >
            <i className="fa fa-user-circle"></i>
            {auth.isConnected ? user.firstName : "Sign In"}
          </Link>

          {auth.isConnected && (
            <div className="main-nav-item" onClick={handleSignout}>
              <i className="fa fa-sign-out"></i>
              Disconnect
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
