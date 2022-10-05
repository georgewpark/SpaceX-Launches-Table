const Error = ({ columns }) => {
  return (
    <tr>
      <td data-label='Error' colSpan={ columns }>Launch data unavailable.</td>
    </tr>
  )
}

export default Error