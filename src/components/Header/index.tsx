import { IUser } from "../../api/userAPI"; // Move into types folder
import styles from "./Header.module.scss";

const Header: React.VFC<{ user: IUser | null }> = ({ user }) => {
  if (!user) return null;

  const { firstName, lastName, dateOfBirth } = user;
  return (
    <header className={styles.header}>
      <h1>
        {firstName} {lastName} ({dateOfBirth})
      </h1>
    </header>
  );
};

export default Header;
