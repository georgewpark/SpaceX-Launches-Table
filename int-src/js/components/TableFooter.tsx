type TableFooterProps = {
  columns: number
}

const TableFooter = ({ columns }: TableFooterProps) => {
  return (
    <tfoot>
      <tr>
        <th colSpan={columns}>Launch information retrieved from the <a href='https://github.com/r-spacex/SpaceX-API' target='_blank'>SpaceX REST API</a></th>
      </tr>
    </tfoot >
  )
}

export default TableFooter