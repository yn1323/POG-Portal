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
  text: string
  value: string
}
interface TBody {
  [key: string]: any
}
interface Props {
  header: Header[]
  tbody: TBody[]
}

export default ({ header = [], tbody = [] }: Props) => {
  const headerLabel = header.map(v => v.text)
  const headerVal = header.map(v => v.value)

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
              {headerVal.map(v => (
                <TableCell align="center" key={v}>
                  {row[v]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
