import React, { memo } from 'react'
import { Button } from '@material-ui/core'
import { Check } from '@material-ui/icons'

interface Props {
  url: any
  title: string
}

export default memo(({ url, title }: Props) => {
  const onClick = () => {
    window.location = url
  }
  return (
    <Button
      variant="contained"
      color="primary"
      size="medium"
      fullWidth={true}
      startIcon={<Check />}
      onClick={onClick}
    >
      {title}
    </Button>
  )
})
