import { useEffect, useState } from "react";
import { UserHeader } from "../components/UserHeader";
import { UserTransaction } from "../components/UserTransaction";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/selectors/user";
import { fetchUserProfile } from "../api/user";
import { Navigate } from "react-router-dom";
import { getAuth } from "../store/selectors/auth";
import { UserButtons } from "../components/UserButtons";
import { UserModal } from "../components/UserModal";

export const UserPage = () => {
  const user = useSelector(getUser);
  const auth = useSelector(getAuth);
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, []);

  if (user.isLoading) {
    return "loading";
  } else if (user.isError || !auth.isConnected) {
    return <Navigate replace to="/signin" />;
  }

  console.log("IS OPEN", modalIsOpen);

  return (
    <main class="main bg-dark">
      <UserHeader firstName={user.firstName} lastName={user.lastName} />
      <UserButtons setModalIsOpen={setModalIsOpen} />
      <h2 class="sr-only">Accounts</h2>
      <UserTransaction
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <UserTransaction
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <UserTransaction
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
      {modalIsOpen && <UserModal setModalIsOpen={setModalIsOpen} />}
    </main>
  );
};
