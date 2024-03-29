import { createRoot } from 'react-dom/client'
import Table from './components/Table'

const container = document.querySelector('#launches-table')
const root = container && createRoot(container)

root && root.render(<Table />)
