import React, { memo, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '95%',
    },
  },
}))

interface Props {
  type: 'Standard' | 'Filled' | 'Outlined'
  label?: string
  defaultValue?: string
  setter: (v: string) => void
}

export default memo(
  ({ type, label = '', defaultValue = '', setter }: Props) => {
    const [ref, setRef] = useState(defaultValue)

    useEffect(() => {
      setRef(defaultValue)
    }, [defaultValue])

    const classes = useStyles()
    const textFieldType = {
      Standard: { id: 'standard-basic' },
      Filled: { id: 'filled-basic' },
      Outlined: { id: 'outlined-basic' },
    }
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id={textFieldType[type].id}
          label={label}
          value={ref}
          onChange={e => setter(e.target.value)}
        />
      </form>
    )
  }
)
