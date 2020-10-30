import React from 'react'
import { Box } from '@material-ui/core'

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '95%',
//     },
//   },
// }))

interface Props {
  pageName: () => JSX.Element
  url: () => JSX.Element
}

export default ({ pageName, url }: Props) => {
  return (
    <Box mb={2}>
      <>{pageName()}</>
      <>{url()}</>
    </Box>
  )
}
