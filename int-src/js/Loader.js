const Loader = ({ columns }) => {
  return (
    <tr>
      <td data-label='Loading' colSpan={ columns }>
        <div className='loader'></div>
        <span className='sr-only'>Loading</span>
      </td>
    </tr>
  )
}

export default Loader