type ErrorProps = {
  columns: number
}

const Error = ({ columns }: ErrorProps) => {
  return (
    <tr>
      <td data-label='Error' colSpan={columns}>
        Launch data unavailable.
      </td>
    </tr>
  )
}

export default Error
