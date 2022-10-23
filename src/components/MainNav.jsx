import { Link } from "react-router-dom";
import ArgentBankLogo from "../img/argentBankLogo.png";

export const MainNav = () => {
  return (
    <nav class="main-nav">
      <a class="main-nav-logo" href="./index.html">
        <img
          class="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        <Link class="main-nav-item" to="signin">
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
};
