import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core'

interface Header {
  [key: string]: any
  text: string
  value: string
}
interface TBody {
  [key: string]: any
}
interface Props {
  [key: string]: any
  header: Header[]
  tbody: TBody[]
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  callback: (data: any) => void
  meta?: any[]
}

export default ({ header = [], tbody = [], callback, meta = [] }: Props) => {
  const headerLabel = header.map(v => v.text)
  const headerKeys = header.map(v => v.value)

  const rowData = (rowIndex: number) => {
    const keys = Object.keys(meta)
    const ret: any = {}
    keys.forEach((key: any) => {
      ret[key] = meta[key][rowIndex]
    })
    return ret
  }
  const clickEvent = (i: number) => {
    const d = rowData(i)
    callback(d)
  }
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {headerLabel.map((label, key) => (
              <TableCell key={key} align="center">
                {label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tbody.map((row, i) => (
            <TableRow key={i} onClick={() => clickEvent(i)}>
              {headerKeys.map((key, j) => (
                <TableCell align="center" key={j}>
                  {row[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
