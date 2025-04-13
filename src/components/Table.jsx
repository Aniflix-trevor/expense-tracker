function Table({ columns, data }) {
  return (
    <table className="table-auto border-collapse border border-gray-300 w-full max-w-3xl">
      <thead>
        <tr className="bg-gray-100">
          {columns.map((column) => (
            <th key={column.id} className="border px-4 py-2 text-left">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="hover:bg-gray-50">
            {columns.map((column) => (
              <td key={column.id} className="border px-4 py-2">
                {row[column.id]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
