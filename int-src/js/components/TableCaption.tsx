type TableCaptionProps = {
  caption: string
}

const TableCaption = ({ caption }: TableCaptionProps) => {
  return (
    <caption>{caption}</caption>
  )
}

export default TableCaption