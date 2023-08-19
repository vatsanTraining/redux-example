import * as React from 'react'

import defaultData from './db.json'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'




const columnHelper = createColumnHelper()

const columns = [
  columnHelper.accessor('id', {
    cell: info => info.getValue(),
    header: "Id"
  }),
  columnHelper.accessor('firstName', {
    id: 'firstName',
    cell: info => info.getValue(),
    header: () => <span>First Name</span>
  }),
  columnHelper.accessor('lastName', {
    header: () => 'Last Name',
    cell: info => {return (<button type="button" onClick={() =>{console.log('clicked')}}>{info.getValue()}</button>)}
  }),
  
]

function Main() {
  const [data, setData] = React.useState(() => [...defaultData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
         </table>
    </div>
  )
}

export default Main

