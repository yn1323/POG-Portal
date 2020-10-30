import React, { memo } from 'react'
import { Button } from '@material-ui/core'
import { Check } from '@material-ui/icons'

export default memo(() => {
  return (
    <Button
      variant="contained"
      color="primary"
      size="medium"
      fullWidth={true}
      startIcon={<Check />}
    >
      保存
    </Button>
  )
})
