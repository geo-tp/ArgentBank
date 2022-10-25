import { Link } from "react-router-dom";
import ArgentBankLogo from "../img/argentBankLogo.png";
import { useSelector } from "react-redux";
import { getAuth } from "../store/selectors/auth";
import { getUser } from "../store/selectors/user";

export const MainNav = () => {
  const auth = useSelector(getAuth);
  const user = useSelector(getUser);
  console.log(user);
  return (
    <nav class="main-nav">
      <Link class="main-nav-logo" to="/">
        <img
          class="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link class="main-nav-item" to={auth.isConnected ? "user" : "signin"}>
          <i class="fa fa-user-circle"></i>
          {auth.isConnected ? user.firstName : "Sign In"}
        </Link>
      </div>
    </nav>
  );
};
