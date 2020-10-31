import React, { memo } from 'react'
import { Button } from '@material-ui/core'
import { Check } from '@material-ui/icons'

interface Props {
  setter: () => void
}

export default memo(({ setter }: Props) => {
  return (
    <Button
      variant="contained"
      color="primary"
      size="medium"
      fullWidth={true}
      startIcon={<Check />}
      onClick={setter}
    >
      保存
    </Button>
  )
})
