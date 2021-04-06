import styles from "./Table.module.scss";

interface ITable {
  columns: string[];
}

const Table: React.FC<ITable> = ({ children, columns }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
