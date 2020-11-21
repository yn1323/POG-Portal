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
  meta?: any[]
}

export default ({ header = [], tbody = [] }: Props) => {
  const headerLabel = header.map(v => v.text)
  const headerKeys = header.map(v => v.value)

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
            <TableRow key={i}>
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
