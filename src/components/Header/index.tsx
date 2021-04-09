import { useState, useEffect } from "react";
import { IUser } from "../../api/userAPI"; // Move into types folder
import { useAppDispatch } from "../../store/hooks";
import { searchUsers, changeUser } from "../../store/reducers/userReducer";

import styles from "./Header.module.scss";

interface IHeader {
  user: IUser | null;
  searchResult: IUser[];
}

const Header: React.VFC<IHeader> = ({ user, searchResult }) => {
  const dispatch = useAppDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const [name, setName] = useState("");

  const searchUser = (name: string) => {
    setName(name);
    setShowSearch(true);
    dispatch(searchUsers(name));
  };

  const selectUser = (userId: number) => {
    setShowSearch(false);
    dispatch(changeUser(userId));
  };

  useEffect(() => {
    if (user) {
      setName(`${user?.firstName} ${user.lastName} (${user.dateOfBirth})`);
    }
  }, [user, showSearch]);

  return (
    <header className={styles.header}>
      <input
        data-testid="search"
        className={styles.search}
        type="text"
        onChange={(e) => searchUser(e.target.value)}
        value={name}
      />

      {showSearch && (
        <div className={styles.searchResults}>
          {searchResult.map((user: IUser) => (
            <p key={user.id} onClick={() => selectUser(user.id)}>
              {user?.firstName} {user.lastName} ({user.dateOfBirth})
            </p>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
