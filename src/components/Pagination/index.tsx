import { useState } from "react";
import styles from "./Pagination.module.scss";

interface IPagination {
  totalPages: number;
  defaultPage?: number;
}

const Pagination: React.VFC<IPagination> = ({
  totalPages,
  defaultPage = 1,
}) => {
  const [active, setActive] = useState(defaultPage);

  return (
    <nav className={styles.pagination}>
      <button>Back</button>
      <ul>
        {Array.from({ length: totalPages }, (_, i) => (
          <li className={i + 1 === active ? styles.active : ""} key={i}>
            {i + 1}
          </li>
        ))}
      </ul>
      <button>Next</button>
    </nav>
  );
};

export default Pagination;
