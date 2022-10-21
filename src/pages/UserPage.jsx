import { UserHeader } from "../components/UserHeader";
import { UserTransaction } from "../components/UserTransaction";

export const UserPage = () => {
  return (
    <main class="main bg-dark">
      <UserHeader firstname="Tony" lastname="Jarvis" />
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
    </main>
  );
};
