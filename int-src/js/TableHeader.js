const TableHeader = ({ tableHeaders }) => {
  return (
    <thead>
      <tr>
        {
          tableHeaders.map(tableHeader => <th key={ tableHeader }>{ tableHeader }</th>)
        }
      </tr>
    </thead>
  )
}

export default TableHeader