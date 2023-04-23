type LoaderProps = {
  columns: number
}

const Loader = ({ columns }: LoaderProps) => {
  return (
    <tr>
      <td data-label='Loading' colSpan={columns}>
        <div className='loader'></div>
        <span className='sr-only'>Loading</span>
      </td>
    </tr>
  )
}

export default Loader
