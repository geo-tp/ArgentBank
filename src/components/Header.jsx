import { Link } from "react-router-dom";
import ArgentBankLogo from "../img/argentBankLogo.png";
import { useSelector } from "react-redux";
import { getAuth } from "../store/selectors/auth";
import { getUser } from "../store/selectors/user";

export const Header = () => {
  const auth = useSelector(getAuth);
  const user = useSelector(getUser);

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
        <div>
          <Link
            className="main-nav-item"
            to={auth.isConnected ? "user" : "signin"}
          >
            <i className="fa fa-user-circle"></i>
            {auth.isConnected ? user.firstName : "Sign In"}
          </Link>
        </div>
      </nav>
    </header>
  );
};
