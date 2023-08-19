import React, { useState } from 'react'
import {useReactTable,createColumnHelper,Column,ColumnDef,flexRender,getCoreRowModel} from '@tanstack/react-table'
import axios from 'axios'
import data from  './db.json'
const UsingReactTable = () => {

    const [list,setList]= useState(()=>data)

    const columnHelper = createColumnHelper()

    
    const columns = [
        columnHelper.accessor('id', {
            header: "Id",
            cell: info => info.getValue()
          }),
          columnHelper.accessor('first_name', {
            cell: info => info.getValue(),
            header: "First Name"
          }),
          columnHelper.accessor('last_name', {
            header: "Last Name",
            cell: info => info.getValue()

          }),
          columnHelper.accessor('email', {
            header: "Email",
            cell: info => info.getValue()

          }),
          columnHelper.accessor('gender', 
          {header: "Gender", cell: info => info.getValue()
                 },             
          ),  
          columnHelper.accessor('ip_address',
           {header: "IP Address",
           cell: info => info.getValue()})     
    ]

    const table = useReactTable({
        list,
        columns,
        getCoreRowModel: getCoreRowModel(),
      })
    

  return (
    <div>
        <table>
            <thead>
            {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  { header.isPlaceholder
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

export default UsingReactTable