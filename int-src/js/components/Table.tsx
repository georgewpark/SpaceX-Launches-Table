import TableCaption from './TableCaption'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import TableFooter from './TableFooter'

const Table = () => {
  const tableHeaders = [
    'Mission Name',
    'Mission Patch',
    'Rocket Name',
    'Launch Site',
    'Launch Year',
    'Launch Success',
    'Mission Details',
  ]

  return (
    <table>
      <TableCaption caption='SpaceX Launches' />
      <TableHeader tableHeaders={tableHeaders} />
      <TableBody tableHeaders={tableHeaders} />
      <TableFooter columns={tableHeaders.length} />
    </table>
  )
}

export default Table
