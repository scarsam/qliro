interface ITable {
  columns: string[];
}

const Table: React.FC<ITable> = ({ children, columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <tr key={index}>
              <th>{column}</th>
            </tr>
          ))}
        </tr>
      </thead>
      {children}
    </table>
  );
};

export default Table;
