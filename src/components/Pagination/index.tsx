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
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={styles.pagination}>
      <button
        onClick={() =>
          setCurrentPage((currentPage) =>
            currentPage === 1 ? currentPage : currentPage - 1,
          )
        }
        className={pages[0] === currentPage ? styles.back : styles.next}
      >
        Back
      </button>
      <ul>
        {pages.map((page) => (
          <li className={page === currentPage ? styles.active : ""} key={page}>
            {page}
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          setCurrentPage((currentPage) =>
            currentPage < pages[pages.length - 1]
              ? currentPage + 1
              : currentPage,
          )
        }
        className={
          pages[pages.length - 1] === currentPage ? styles.back : styles.next
        }
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
