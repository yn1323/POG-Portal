import * as React from 'react'
import { Dialog, DialogTitle, List, ListItem } from '@material-ui/core'

interface Props {
  children: JSX.Element | React.FC
  title?: string
  open: boolean
  onClose: () => void
}

export default ({ open = false, onClose, children, title = '' }: Props) => {
  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {children}
    </Dialog>
  )
}
