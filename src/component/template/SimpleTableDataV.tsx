import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Box,
} from '@material-ui/core'
import ButtonRacePage from 'src/component/atom/ButtonRacePage'

interface TBody {
  key: string
  value: any
}
interface Url {
  url: string
  title: string
}
interface Props {
  [key: string]: any
  tbody: TBody[]
  url: Url
}

export default ({ tbody = [], url = { url: '', title: '' } }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {tbody.map((row, i) => (
            <TableRow key={i}>
              <TableCell align="center">{row.key}</TableCell>
              <TableCell align="center">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box p={1}>
        <ButtonRacePage url={url.url} title={url.title} />
      </Box>
    </TableContainer>
  )
}
